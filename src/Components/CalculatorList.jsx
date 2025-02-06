import React from 'react';
import CalaculatorButton from './CalculatorButton';
const CalculatorList = ({displayList,onButtonClick}) => {

  return (<div>
    {displayList.map((list)=>(<CalaculatorButton key={list} onButtonClick={onButtonClick} display={list}/>))}
    </div>);
}

export default CalculatorList;
