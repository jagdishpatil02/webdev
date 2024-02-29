import React, { useEffect, useState } from "react";

export const Categories = ({ sendCategories }) => {
  const [categories, setCategories] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await fetch("https://api.escuelajs.co/api/v1/categories");
      const response = await data.json();
      setCategories(response);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <p className="text-black font-medium  px-2">Categories:</p>
      <div className="flex flex-wrap flex-row">
        {categories &&
          categories?.map((category, index) => (
            <div
              className=" bg-black px-2 text-white rounded-full mx-2 mt-4 text-center "
              key={index}
            >
              <button key={index} onClick={() => sendCategories(category.id)}>
                {category.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
