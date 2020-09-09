import React from "react";

import ImageDetail from "./image_detail";

const IMAGES = [
  { title: "Pen", url: "https://dummyimage.com/600x400" },
  { title: "Cup", url: "https://dummyimage.com/600x400" },
  { title: "Hair", url: "https://dummyimage.com/600x400" },
];
const image_list = () => {
  const RenderedImages = IMAGES.map((image, i) => (
    <ImageDetail key={i} image={image} />
  )); 
  return <ul className="media-list list-group">{RenderedImages}</ul>;
};

export default image_list;
