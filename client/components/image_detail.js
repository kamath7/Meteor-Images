import React from "react";

const image_detail = (props) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.webformatURL} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.image.tags.split(',')[0]}</h4>
      </div>
    </li>
  );
};

export default image_detail;
