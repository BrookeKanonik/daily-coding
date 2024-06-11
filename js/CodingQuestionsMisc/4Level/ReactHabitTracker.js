//Instructions:

/*
A habit tracking app presents a chart on how many times each week a user has fulfilled their goal. The user can scroll through their data to see their progress.

The HabitChart component receives the HabitData array, where each items represents how many times the user has completed their goal each week. Every column in the table is highlighted with the "done" class based on the number of days in the week the user has completed their goal, and the last row shows the week number.

The chart has a fixed length of 7 weeks and the user starts tracking their habit from week 1. The navigation buttons below the chart are used to scroll through the data one week at a time. The respective button is disabled if there is no further data to scroll through. The habitData prop will have at least 7 items.
*/

//Initial attempt:

import React, {useState} from "react";
import ReactDOM from "react-dom";




const HabitChart = (data) => {

  const [state, setState] = useState(0)
  const [buttState, setButtState] = useState(true)
  
  const prev = () => {
    let amount = state === 0 ? 0 : state -1
    if (amount > 0){ //not working 
      setButtState(false) // still setting it as true?? 
    }
    setState(amount)
  }

  const next = () => {
    let amount = state + 7 === data.habitData.length -1 ? data.habitData.length -1 : state + 1 //next is going to infinite
    setState(amount)
  }
  return (
    <div>
      <table id="chart">
        <tbody>
          {Array(7).fill().map((row, i) => {
            return <tr>
                {Array(7).fill().map((col, j) => {
                 <td>{data.habitData[0][j]}</td> //where to add the style 
                })}
              </tr>
          })}
          {Array(7).fill().map((item, k) => {
            return <td>{k + state + 1}</td>
          })}
        </tbody>
      </table>
      <button id="navPrevBtn" onClick={prev} disabled={buttState}>Previous</button>
      <button id="navNextBtn" onClick={next}>Next</button>
    </div>
  );
};

const style = `
td {
  border: 1px solid black;
  width: 20px;
  height: 20px;
}
.done {
  background-color: green;
}`;

const styleElement = document.createElement("style");
styleElement.textContent = style;
document.head.appendChild(styleElement);

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HabitChart habitData={ [0, 3, 2, 5, 3, 2, 1, 7, 0, 5, 1, 6, 1, 6, 1]} />);

//Updated code (works but needs to be rotated):

import React, {useState} from "react";
import ReactDOM from "react-dom";

const HabitChart = (data) => {

  const [state, setState] = useState(0)
  const [buttState, setButtState] = useState(true)
  const [buttStateNext, setButtStateNext] = useState(false)
  
  const prev = () => {
    let amount = state === 0 ? 0 : state -1
    if (amount === 0){ //not working 
      setButtState(true)
    }
    setState(amount)
    setButtStateNext(false)
  }

  const next = () => {
    let amount =  state + 1//next is going to infinite
    //state + 7 === data.habitData.length -1 ? data.habitData.length :
    console.log(amount, data.habitData.length)
    if (amount >0){
      setButtState(false)
      setButtStateNext(false)
    }
    if (amount + 7 === data.habitData.length){
      setButtStateNext(true)
    }
    setState(amount)
  }

  const checkDone = (index, height)=> {
    if (data.habitData[state + index] > height){
      return doneColor;
    }
  }
  const rotate = {
    transform: [{rotate: '90deg'}]
  }
  return (
    <div>
      <table id="chart">
        <tbody >
          {Array(7).fill().map((row, i) => {
            return <tr>
                {Array(7).fill().map((col, j) => {
                return <td style ={checkDone(i,j)}></td> //where to add the style 
                })}
              </tr>
          })}
          {Array(7).fill().map((item, k) => {
            return <td>{k + state + 1}</td>
          })}
        </tbody>
      </table>
      <button id="navPrevBtn" onClick={prev} disabled={buttState}>Previous</button>
      <button id="navNextBtn" onClick={next} disabled = {buttStateNext}>Next</button>
    </div>
  );
};

// const style = `
// td {
//   border: 1px solid black;
//   width: 20px;
//   height: 20px;
// }
// .done {
//   background-color: green;
// }`;

const style = `
td {
  border: 1px solid black;
  width: 20px;
  height: 20px;
}
`;

const doneColor = {
  backgroundColor: 'green'
}

const styleElement = document.createElement("style");
styleElement.textContent = style;
document.head.appendChild(styleElement);

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HabitChart habitData={ [0, 3, 2, 5, 3, 2, 1, 7, 0, 5, 1, 6, 1, 6, 1]} />);