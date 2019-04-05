import React from 'react';
import ReactDOM from 'react-dom';
import CourtVision from './components/CourtVision';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CourtVision />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
