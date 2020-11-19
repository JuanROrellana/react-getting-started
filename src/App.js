import React, {useState} from 'react';
import Button from "./Button";
import Display from "./Display";

export default function App() {
    const [counter, setCounter] = useState(15);

    const incrementCounter = (incrementValue) => {
        setCounter(counter + incrementValue);
    }

  return (
    <div className="container">
      <h1>Hello React</h1>
        <Button onClickFunction={incrementCounter} increment={1}/>
        <Button onClickFunction={incrementCounter} increment={5}/>
        <Button onClickFunction={incrementCounter} increment={10}/>
        <Display message={counter}/>
    </div>
  );
}

