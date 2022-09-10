import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter:0
    }
  }

  increment = () => {
    this.setState({counter : this.state.counter + 1});
  };

  decrement = () => {
    this.setState({counter : this.state.counter - 1});
  }

  render () {
    return (
      <div className='App'>
        <div className='row'>
            <div>
                <button onClick={this.increment} className='counter'>+</button>
            </div>
            
            <div>
                <button onClick={this.decrement} className='counter'>-</button>
            </div>
        </div>      
        <h2>Counter: {this.state.counter}</h2>
      </div>
    )
  }

}

export default App;