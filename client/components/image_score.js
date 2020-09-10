import React from "react";

const image_score = (props) => {
  //Comparing views and likes
  const { views, downloads } = props;
  const viewsPercent = `${100 * (views / (views + downloads))}%`;
  const downloadPercent = `${100 * (downloads / (views + downloads))}%`;
  return (
    <div>
      <strong>Views/Downloads</strong>
      <div className="progress">
        <div style={{width: viewsPercent}} className="progress-bar progress-bar-success progress-bar-striped" />
        <div style={{width: downloadPercent}} className="progress-bar progress-bar-warning progress-bar-striped" />
      </div>
    </div>
  );
};

export default image_score;
