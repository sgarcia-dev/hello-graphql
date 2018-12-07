import React, { Component } from "react";
import { getGraphqlData } from "./graphql";
import "./App.css";

class App extends Component {
  state = {
    greeting: "Loading ..."
  };

  async componentDidMount() {
    const { data } = await getGraphqlData({
      query: "{ greeting}"
    });
    this.setState({
      greeting: data.greeting
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}

export default App;
