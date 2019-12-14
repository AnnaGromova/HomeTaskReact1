import React from "react";
import "../index.css";

export class Stopwatch extends React.Component {
    state = { counter: 0 };

    componentDidMount() {
        setInterval(this.updateCounter, 1000);
    }

    updateCounter = () => this.setState({ counter: this.state.counter + 1 });

    render() {
        return <div className="stopwatch">{this.state.counter}</div>;
    }
}