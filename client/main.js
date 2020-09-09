//All Javascript automatically run

//importing react
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

//Importing custom components

import ImageList from "./components/image_list";

//Creating a component

const App = () => {
  return (
    <div>
      <h1>Image List</h1>
      <ImageList />
    </div>
  );
};
//Rendering to the screen
Meteor.startup(() => {
  console.log(Meteor.settings)
  ReactDOM.render(<App />, document.querySelector(".container"));
  axios
    .get(
      `https://pixabay.com/api/?key=${process.env.LALLE_KEY}&q=india&image_type=photo&pretty=true`)
    .then((response) => console.log(response));
    
}); //Done to avoid DOM not loaded errors
