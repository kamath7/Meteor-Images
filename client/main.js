//All Javascript automatically run

//importing react
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

//Importing custom components

import ImageList from "./components/image_list";

//Creating a component
class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      images: []
    }
  }
  componentWillMount() {
    axios
      .get(
        `https://pixabay.com/api/?key=${process.env.LALLE_KEY}&q=india&image_type=photo&pretty=true`
      )
      .then((response) => this.setState({images:response.data.hits}));
  }
  render() {
    return (
      <div>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}
//Rendering to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".container"));
}); //Done to avoid DOM not loaded errors
