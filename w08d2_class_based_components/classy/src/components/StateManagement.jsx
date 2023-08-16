import React from 'react';

const StateManagement = class extends React.Component {
  constructor() {
    console.log('State Management Constructor Called');
    super();
    this.state = {
      count: 0,
      message: 'Monkey Fuzz Forever!'
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  clickHandler(){
    this.setState({
      count: this.state.count + 1
    });
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render() {
    console.log('StateManagement render called');
    console.log('this.props', this.props);
    return (
      <>
        <h2>State Management Component</h2>
        <p>Message: {this.state.message}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.clickHandler}>Increment The Count</button>
        <p>{this.props.customtext}</p>
      </>
    );
  }

};

export default StateManagement;
