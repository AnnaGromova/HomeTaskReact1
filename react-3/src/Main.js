import React from 'react';
import './App.css';
import './all.css';
import Sec from './Sec'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: 0};
  }

  handleClick = (e) => {
    e.preventDefault();
    let i = this.state.data;
    this.setState({data: i+1});
  }

  render(){

    let secList = []

    for(let j = 0; j < this.state.data; ++j) {
      secList.push(true)
    }

    const secListMaker = secList.map(() => <div className="stopwatch">
    <Sec />
  </div>)

    return (
        <main>
            <div className="container">
                <button id="startStopwatch" className="start-stopwatch" onClick={this.handleClick}>Добавить секундомер</button>
                <div className="stopwatch">
                  <Sec />
                </div>
                {secListMaker}
            </div>
        </main>
    )
  }
}

export default Main;
