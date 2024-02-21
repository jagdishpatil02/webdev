import React, { useState } from "react";
import { PhotosContext } from "../context/Photos";
import { ListPhotos } from "./ListPhotos";

export const Search = () => {
  const [term, setTerm] = useState("");
  const [inputTerm, setInputTerm] = useState("");

  const types = [
    {
      name: "Mountains",
    },
    {
      name: "Beaches",
    },
    {
      name: "Rivers",
    },
    {
      name: "Trees",
    },
  ];

  function getPhotosTerm(value) {
    setTerm(value);
  }

  function serachImages(e) {
    e.preventDefault();
    setTerm(inputTerm);
  }

  return (
    <div className="flex justify-center items-center py-16 flex-col">
      <p className="my-8 font-bold underline text-2xl">Image Quest</p>

      <div className="flex flex-col w-1/2 relative">
        <form>
          <input
            type="text"
            value={inputTerm}
            className="border-2 p-2 w-full"
            onChange={(e) => setInputTerm(e.target.value)}
          />

          {inputTerm && (
            <button
              type="submit"
              className="bg-black p-2 text-white rounded absolute right-0 top-[1.5px]"
              onClick={(e) => serachImages(e)}
            >
              Get
            </button>
          )}
        </form>
      </div>
      <div className="lg:w-1/3  w-full p-2 flex justify-center mt-4">
        {types.map((type, index) => (
          <button
            className="bg-black p-2 text-white rounded mx-2"
            key={index}
            onClick={() => getPhotosTerm(type.name)}
          >
            {type.name}
          </button>
        ))}
      </div>

      <PhotosContext.Provider value={{ term }}>
        <ListPhotos></ListPhotos>
      </PhotosContext.Provider>
    </div>
  );
};
