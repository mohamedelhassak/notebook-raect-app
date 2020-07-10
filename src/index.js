import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase')

require('firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAz3PNNtyvhsIqEu_4T-Z-xHMJu-ko2IBA",
    authDomain: "notebookreact.firebaseapp.com",
    databaseURL: "https://notebookreact.firebaseio.com",
    projectId: "notebookreact",
    storageBucket: "notebookreact.appspot.com",
    messagingSenderId: "590654177462",
    appId: "1:590654177462:web:c9da58558c845bef48a617",
    measurementId: "G-YZ61PBCC0P"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
