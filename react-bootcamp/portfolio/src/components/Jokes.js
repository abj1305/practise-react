import React, { Component } from "react";
import Header from "./Header";

const Joke = (props) => {
  const { joke } = props.joke;
  return <p style={{ margin: 20 }}>{joke}</p>;
};

class Jokes extends Component {
  state = { joke: {}, jokes: [] };
  componentDidMount() {
    fetch("https://api.icndb.com/jokes/random")
      .then((response) => response.json())
      .then((json) => json.value)
      .then((value) => this.setState({ joke: value }))
      .catch((error) => alert(error));
  }
  fetchJokes = () => {
    fetch("https://api.icndb.com/jokes/random/10")
      .then((response) => response.json())
      .then((json) => json.value)
      .then((value) => this.setState({ jokes: value }))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <div>
        <Header />
        <h2>Highlighted Joke</h2>
        <div>
          <Joke joke={this.state.joke} />
          <h3>Want ten new jokes?</h3>
          <button onClick={this.fetchJokes}>Click Me!</button>
          {this.state.jokes.map((jk) => (
            <Joke key={jk.id} joke={jk} />
          ))}
        </div>
      </div>
    );
  }
}

export default Jokes;
