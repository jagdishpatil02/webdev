import React from "react";
import { ImagesShow } from "./ImagesShow";
export const Imagelist = ({ imageList }) => {
  const renderendImages = imageList.map((image, index) => {
    return <ImagesShow image={image} key={index} />;
  });
  return <div>{renderendImages}</div>;
};
