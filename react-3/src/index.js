import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import Main from './Main';
import Footer from './Footer'

//ReactDOM.render(<Main/>, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('rootHeader'));
ReactDOM.render(<Main />, document.getElementById('rootMain'));
ReactDOM.render(<Footer />, document.getElementById('rootFooter'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
