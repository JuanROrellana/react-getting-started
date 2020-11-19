import React from 'react';
import Button from "./Button";

export default function App() {
  return (
      //JSX code
    <div className="container">
      <h1>Hello React</h1>
        <Button/>
    </div>
      //JS code before babel compilation
      // React.createElement('div', null, 'Hello react1a')
  );
}

