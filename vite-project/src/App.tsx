import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

interface ButtonProps {
  content: String;
  increment?: () => void;
}
const Button = (props: ButtonProps) => {
  return (
    <>
      <button onClick={props.increment}>
        {props.content}
      </button>
    </>
  );
};
interface CounterProps{
  counter:number
}
const Counter = (props:CounterProps) => {
  return (
    <>
      <p>{props.counter}</p>
    </>
  );
};

function App() {
  const [counter, setCounter] = useState<number>(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <Counter counter={counter}/>
      <Button content="increment" increment={increment} />
    </div>
  );
}

export default App;
