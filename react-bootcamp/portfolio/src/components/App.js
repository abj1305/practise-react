import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Profile from "../assets/photograph_abhijeet.JPG";
import Title from "./Title";
import Jokes from "./Jokes";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <img src={Profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>I Am Abhijeet.</p>
        {/* {this.state.displayBio ? <Title /> : null} */}
        <Title />
        <p>I look forward to learn react.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Pune.</p>
            <p>I code everyday and I like JS</p>
            <p>React JS is awesome</p>
            <p>Besides codeing, I like music</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
        <hr />
        <Jokes />
      </div>
    );
  }
}
export default App;
