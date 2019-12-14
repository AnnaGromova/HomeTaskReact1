import React from "react";
import "../index.css";
import { Stopwatch } from "./Stopwatch";

export class StopwatchContainer extends React.Component {
    state = { timers: [Stopwatch] };

    handleClick = () => {
        const  timers  = this.state.timers;
        timers.push(Stopwatch);
        this.setState({ timers });
    };

    render() {
        return (
            <div className="container">
                <button
                    id="startStopwatch"
                    className="start-stopwatch"
                    onClick={this.handleClick}
                >
                    Добавить секундомер
                </button>
                <div className="stopwatches">
                <>
                    {this.state.timers.map((Element, i) => (
                        <Element key={i} />
                    ))}
                </>
                </div>
            </div>
        );
    }
}