import React, { Component } from 'react';
import "./App.css"
import TodoList from './components/TodoList';

// 1- add a todo
// 2- display todo's
// 3- cross off todo's
// 4- show number of active todo's
// 5- filter all/active/complete
// 6- delete todo
// 7- delete all complete
//   7.1- only show if at least one is complete
// 8- button to toggle all on/off


//This was a walkthru from YouTube... Doesn't match assignment perfectly although additional features

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}
export default App;
