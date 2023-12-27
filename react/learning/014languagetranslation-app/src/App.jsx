import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [result, setResult] = useState(null);
  let [inputLanguage, setInputLanguage] = useState("");
  let [translatedValue, setTranslatedValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://google-translate1.p.rapidapi.com/language/translate/v2/languages";
      const options = {
        method: "GET",
        headers: {
          "Accept-Encoding": "application/gzip",
          "X-RapidAPI-Key": "",
          "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        result = await response.json();
        setResult(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const convertData = async (language) => {
    let detectedLanguage;
    setInputLanguage(inputLanguage);

    const url =
      "https://google-translate1.p.rapidapi.com/language/translate/v2/detect";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: new URLSearchParams({
        q: inputLanguage,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      detectedLanguage = result.data.detections[0][0].language;
      console.log(detectedLanguage);
    } catch (error) {
      console.error(error);
    }

    const translateUrl =
      "https://google-translate1.p.rapidapi.com/language/translate/v2";
    const translateOptions = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: new URLSearchParams({
        q: inputLanguage,
        target: language,
        source: detectedLanguage,
      }),
    };

    try {
      const response = await fetch(translateUrl, translateOptions);
      const result = await response.json();
      setTranslatedValue(result.data.translations[0].translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex  items-start flex-col py-16 px-16">
        <div>
          <label className=" text-sm font-medium text-white inline">
            Enter value to convert:
          </label>
          <input
            type="text"
            value={inputLanguage}
            onChange={(e) => setInputLanguage(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 ml-2"
          />
        </div>

        <div className="my-4">
          <label className="block text-sm font-medium text-white mb-4">
            Convert to:
          </label>
          {result && result.data && result.data.languages ? (
            <div className="flex space-x-2 space-y-2 flex-wrap">
              {result.data.languages.map((lan, index) => (
                <button
                  key={index}
                  onClick={() => convertData(lan.language)}
                  className="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600"
                >
                  {lan.language}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-red-500">No data found</p>
          )}
        </div>

        <div className="mb-4">
          <p className="font-bold text-white">
            Your translated text is: {translatedValue}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
