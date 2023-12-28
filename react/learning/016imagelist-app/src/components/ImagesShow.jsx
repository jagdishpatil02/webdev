import React from "react";

export const ImagesShow = ({ image }) => {
  return (
    <div>
      <img src={image?.urls?.small} alt={image?.alt_description} />
    </div>
  );
};
