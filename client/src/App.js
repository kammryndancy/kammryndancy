import React, { Component } from "react";
import './App.css';
import Header from './components/header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
        <div className="app">
          <Header/>
          <p className="app-intro">{this.state.apiResponse}</p>
        </div>
    );
  }
}

export default App;
