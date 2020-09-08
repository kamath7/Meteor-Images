//All Javascript automatically run

//importing react
import React from "react";
import ReactDOM from "react-dom";

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
  ReactDOM.render(<App />, document.querySelector(".container"));
}); //Done to avoid DOM not loaded errors
