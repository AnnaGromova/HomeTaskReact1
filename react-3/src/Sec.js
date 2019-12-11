import React from 'react';
import './App.css';
import './all.css';
import { render } from '@testing-library/react';

class Sec extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:0};
    }

    updateCount = () => {
        let i = this.state.value;
        this.setState({value: i+1})
    }

    componentDidMount()
    {
        setInterval(this.updateCount, 1000);
    }

    render(){
        return (
            <h1 value="">{this.state.value}</h1>
        )
    }
}

export default Sec;
