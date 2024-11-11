
'use client';
import { useState } from 'react';
import { agent } from "~/lib/api";

export default function Home() {
  const [url, setUrl] = useState('');
  const [post, setPost] = useState<any>(null);
  const [sentiment, setSentiment] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function query(data: { inputs: string }) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/ProsusAI/finbert",
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const urlParts = url.split('/');
      const handle = urlParts[urlParts.indexOf('profile') + 1];
      const postId = urlParts[urlParts.length - 1];

      const profile = await agent.getProfile({ actor: handle });
      const posts : any = await agent.app.bsky.feed.getPosts({
        uris: [`at://${profile.data.did}/app.bsky.feed.post/${postId}`]
      });

      setPost(posts.data.posts[0]);

      // Get sentiment analysis
      const sentimentResult = await query({ inputs: posts.data.posts[0].record.text });
      setSentiment(sentimentResult[0]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="font-bold text-2xl mb-6">Bluesky Post Sentiment Analyzer</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter Bluesky post URL"
          className="w-full p-2 border rounded-lg mb-2"
        />
        <button 
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Loading...' : 'Analyze Post'}
        </button>
      </form>

      {post && (
        <div className="border rounded-lg p-4 bg-gray-900 text-white mb-4">
          <div className="flex items-center gap-3 mb-4">
            {post.author.avatar && (
              <img 
                src={post.author.avatar} 
                alt="Profile" 
                className="w-12 h-12 rounded-full"
              />
            )}
            <div>
              <div className="font-bold">{post.author.displayName}</div>
              <div className="text-gray-400">@{post.author.handle}</div>
            </div>
          </div>
          <div className="mb-4">
            {post.record.text}
          </div>
          {post.embed?.images && (
            <div className="mt-2">
              {post.embed.images.map((image: any, index: number) => (
                <img 
                  key={index}
                  src={image.fullsize} 
                  alt="Post image" 
                  className="rounded-lg max-h-96 w-auto"
                />
              ))}
            </div>
          )}
        </div>
      )}

      {sentiment && (
        <div className="border rounded-lg p-4 bg-white">
          <h2 className="font-bold text-lg mb-3">Sentiment Analysis</h2>
          <div className="space-y-2">
            {sentiment.map((s: any) => (
              <div key={s.label} className="flex items-center">
                <div className="w-24 capitalize">{s.label}:</div>
                <div className="flex-1 bg-gray-200 rounded-full h-4">
                  <div 
                    className={`h-full rounded-full ${
                      s.label === 'positive' ? 'bg-green-500' :
                      s.label === 'negative' ? 'bg-red-500' :
                      'bg-blue-500'
                    }`}
                    style={{ width: `${s.score * 100}%` }}
                  ></div>
                </div>
                <div className="w-20 text-right">{(s.score * 100).toFixed(1)}%</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
