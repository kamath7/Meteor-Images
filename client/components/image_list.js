import React from "react";

import ImageDetail from "./image_detail";


const image_list = (props) => {
  const RenderedImages = props.images.map((image, i) => (
    <ImageDetail key={i} image={image} />
  )); 
  return <ul className="media-list list-group">{RenderedImages}</ul>;
};

export default image_list;
