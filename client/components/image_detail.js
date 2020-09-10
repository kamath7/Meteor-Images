import React from "react";
import ImageScore from "./image_score";

const image_detail = (props) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.webformatURL} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.image.tags.split(',')[0]}</h4>
        <p>Image by {props.image.user}</p>
        <ImageScore views={props.image.views} downloads={props.image.downloads}/>
      </div>
    </li>
  );
};

export default image_detail;
