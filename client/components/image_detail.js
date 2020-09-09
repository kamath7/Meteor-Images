import React from "react";

const image_detail = (props) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.url} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.image.title}</h4>
      </div>
    </li>
  );
};

export default image_detail;
