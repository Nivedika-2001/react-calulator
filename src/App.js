import CalaculatorHeading from "./Components/CalaculatorHeading";
import CalaculatorButton from "./Components/CalculatorButton";
import CalculatorList from "./Components/CalculatorList";
import "./App.css";
import { useMemo, useState } from "react";
const App = () => {
  console.log("app")
  const displayList = [
    ["C", 1, 2],
    ["+", 3, 4],
    ["-", 5, 6],
    ["*", 7, 8],
    ["/", "=", 9],
    [0, "."],
  ];
  const [inputvalue, setInputValue] = useState("");
  const [calValue, setCalValue] = useState("");
  
 const calulate=(inputvalue)=>{
  let resultStorage;
  console.log(`calculate : ${inputvalue}`);
  resultStorage = eval(inputvalue)
  console.log({resultStorage})
  return resultStorage;
  }
  let result;
  const memoizedResult=useMemo(()=>{
    console.log("Memo")
    
    calulate(calValue)
  },[calValue])
  
  const onButtonClick = (button) => {
    if (button === "=") {
      console.log(button)
      const result=calulate(inputvalue);
      console.log({result})
      setInputValue(result);
      setCalValue(inputvalue);
      
    } else if (button === "C") {
      setInputValue("");
    } else {
      const newDisplayValue = inputvalue + button;
      console.log({newDisplayValue})
      setInputValue(newDisplayValue);
    }
  };

  return (
    <div className="container justify-content-center">
      <CalaculatorHeading inputvalue={inputvalue} />
      <CalculatorList displayList={displayList} onButtonClick={onButtonClick} />
    </div>
  );
};

export default App;
