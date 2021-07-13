import React, { useReducer } from 'react';
import reducer, { initialState, calculateResult } from './reducers/index'
import './App.css';
import { applyNumber, changeOperation, clearDisplay, clearMemory, changeMemory, recallMemory } from './actions/index'
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
 
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number));
    console.log(number)
  }
  const handleOperation = (operator) => {
    dispatch(changeOperation(operator));
  }
  const handleClearMemory = () => {
    dispatch(clearMemory());
  }
  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  }
  const handleChangeMemory = () => {
    dispatch(changeMemory());
  }
  const handleMemoryRecall = () => {
    dispatch(recallMemory());
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick = {handleChangeMemory}/>
              <CalcButton value={"MR"} onClick = {handleMemoryRecall}/>
              <CalcButton value={"MC"} onClick = {handleClearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleApplyNumber(1)} />
              <CalcButton value={2} onClick={() => handleApplyNumber(2)}/>
              <CalcButton value={3} onClick={() => handleApplyNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApplyNumber(4)}/>
              <CalcButton value={5} onClick={() => handleApplyNumber(5)}/>
              <CalcButton value={6} onClick={() => handleApplyNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApplyNumber(7)}/>
              <CalcButton value={8} onClick={() => handleApplyNumber(8)}/>
              <CalcButton value={9} onClick={() => handleApplyNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick = {() => handleOperation("+")}/>
              <CalcButton value={"*"} onClick = {() => handleOperation("*")}/>
              <CalcButton value={"-"} onClick = {() => handleOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick = {handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
