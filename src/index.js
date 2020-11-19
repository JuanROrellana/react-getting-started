import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    //JSX code
    <App />,
    //JS code before babel compilation
    // React.createElement(App),
    document.getElementById('root')
);
