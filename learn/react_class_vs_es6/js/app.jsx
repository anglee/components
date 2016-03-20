import React from 'react';
import ReactDOM from 'react-dom';

// Classic
const MyClass = React.createClass({
  getInitialState() {
    return {
      foo: "1234"
    };
  },
  render() {
    return (<div>
      <div>Component class declared with <b>React.createClass</b></div>
      <div><button onClick={this.onClick}>TEST</button></div>
    </div>);
  },

  onClick() {
    console.log("MyClass: clicked", this.state.foo);
  }
});

// Modern
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      foo: "1234"
    };
    this.onClick2 = this.onClick2.bind(this);
  }
  render() {
    return (<div>
      <div>Component class declared with <b>React.Component</b></div>
      <div><button onClick={this.onClick}>TEST</button></div>
      <div><button onClick={this.onClick2}>TEST2</button></div>
      <div><button onClick={this.onClick3}>TEST3</button></div>
    </div>);
  }

  onClick() {
    console.log("MyComponent: clicked", this.state.foo);
  }
  onClick2() {
    console.log("MyComponent: clicked", this.state.foo);
  }
  onClick3 = () => {
    console.log("MyComponent: clicked", this.state.foo);
  }
}



ReactDOM.render(<div>
    <MyClass />
    <hr/>
    <MyComponent />
  </div>,
  document.getElementById('root'));