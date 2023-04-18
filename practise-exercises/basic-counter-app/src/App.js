import React, { Component } from "react";
import "./App.css";
import TagManager from "react-gtm-module";
const tagManagerArgs = {
  gtmId: "GTM-PWN8VJZ",
};
TagManager.initialize(tagManagerArgs);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
    window.dataLayer.push({
      event: "{event-name}",
      label: "{some-more-information}",
    });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
    window.dataLayer.push({
      event: "decrement",
    });
  };

  render() {
    return (
      <div className="App">
        <div className="row">
          <div>
            <button onClick={this.increment} className="counter">
              +
            </button>
          </div>

          <div>
            <button onClick={this.decrement} className="counter">
              -
            </button>
          </div>
        </div>
        <h2>Counter: {this.state.counter}</h2>
      </div>
    );
  }
}

export default App;
