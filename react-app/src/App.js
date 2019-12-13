import React, {} from 'react';
import './App.css';

function App() {
    class HeaderComponent extends React.Component{
        render() {
            return (
                <header>
                    <div className="container">
                        Секундомер
                    </div>
                </header>
            );
        }
    }

    class MainComponent extends React.Component {
        render() {

            return (
                <main>
                    <div className="container">
                        <Stopwatches/>
                    </div>
                </main>
            );
        }
    }

    class FooterComponent extends React.Component{
        render() {
            return (
                <footer>
                    <div className="container">
                        Look my <a href="" className="vk-link">vk page</a>!
                    </div>
                </footer>
            );
        }
    }

    class Stopwatches extends React.Component {
        constructor(props) {
            super(props);
            this.state = {counter: 0, countersList: [0]};
            this.state.stopwatchesCount = 1;
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState({stopwatchesCount: ++this.state.stopwatchesCount});

            let currentCountersList = this.state.countersList;
            currentCountersList.push(this.state.counter);
            this.setState({countersList: currentCountersList});
        }

        componentDidMount() {
            setInterval(() => this.tick(), 1000);
        }

        tick() {
            this.setState({counter: ++this.state.counter});
        }

        render() {
            let stopwatchesList = [];

            for (let i = 0; i < this.state.stopwatchesCount; i++) {
                let stopwatchID = "stopwatch" + (i + 1);
                let stopwatchValue = this.state.counter - this.state.countersList[i];
                stopwatchesList.push(<div id={stopwatchID} className="stopwatch">{stopwatchValue}</div>);
            }

            return (
                <div>
                    <button onClick={this.handleClick} id="startStopwatch"
                            className="start-stopwatch">Добавить секундомер</button>
                    {stopwatchesList}
                </div>
            );
        }
    }

    return (
        <div>
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
        </div>
    );
}

export default App;