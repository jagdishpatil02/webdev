import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const api = {
  api_url: "https://api.openweathermap.org/data/2.5",
  api_key: "",
  api_icon_url: "https://openweathermap.org/img/w",
};

function App() {
  const [lat, setLat] = useState([]);
  const [lang, setLang] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLang(position.coords.longitude);
      });

      await fetch(
        `${api.api_url}/weather/?lat=${lat}&lon=${lang}&units=metric&APPID=${api.api_key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [lat, lang]);

  return (
    <>
      {data && data.weather && data.weather.length > 0 ? (
        <>
          <p>City Name: {data.name}</p>
          <p>Temperature: {data.main?.temp}</p>
          <p>Sunrise: {data.sys?.sunrise}</p>
          <p>Sunset: {data.sys?.sunset}</p>
          <p>Description: {data.weather[0]?.description}</p>
        </>
      ) : (
        <p>No data found</p>
      )}
    </>
  );
}

export default App;
