import { useState } from "react";
import "./App.css";
import { Searchbar } from "./components/Searchbar";
import { getImages } from "./api";
import { Imagelist } from "./components/imagelist";
function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const results = await getImages(term);
    setImages(results);
  };
  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <Imagelist imageList={images} />
    </>
  );
}

export default App;
