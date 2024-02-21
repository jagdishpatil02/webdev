import { addPost, fetchPosts, fetchTags } from "../api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const PostsList = () => {
  const {
    data: postData,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addPost,
    onMutate: () => {
      return { id: 1 };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );

    if (!title || !tags) return;
    mutate({ id: postData.length + 1, title, tags });
    e.target.reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your post"
          className="postbox"
          name="title"
        />
        <div className="tags">
          {tagsData?.map((tag) => {
            return (
              <div key={tag}>
                <input name={tag} id="{tag}" type="checkbox" />
                <label htmlFor="{tag}">{tag}</label>
              </div>
            );
          })}
        </div>

        <button className="submit-btn">Post</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}

      {postData &&
        postData.map((post) => {
          return (
            <div key={post.id} className="post">
              <div>{post.title}</div>
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default PostsList;
