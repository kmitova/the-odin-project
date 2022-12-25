import React from "react";

const ErrorComponent = () => <div>{props.ignore}</div>;

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });

    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("component did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("should component update - do not render");
      return false;
    }
    console.log("should component update - render");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get snapshot before update");
    return null;
  }

  render() {
    console.log("render", this.state.error);
    if (this.state.error) {
      return <div>Error! {this.state.error}</div>;
    }
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
        <ErrorComponent />
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  componentDidCatch(error, info) {
    console.log("component did catch");
    this.setState({ error, info });
  }
}
