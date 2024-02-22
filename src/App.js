import logo from './pluginIcon.png';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';


function getTotalDay1Part1(stringValues) {

  // Method using Array;
  let total = [];

  for (let i = 0; i < stringValues.length; i++) {
    let numArray = [];
    for (const char of stringValues[i]) {
      if (!isNaN(char)) {
        numArray.push(char);
      }
    }
    if (numArray.length > 1) {
      total.push(numArray[0] + numArray[numArray.length-1]);
    }
    else {
      total.push(numArray + numArray);
    }
  }
  let sum = 0;
  for (let i = 0; i < total.length; i++) {
    sum += Number(total[i]);
  }
  return sum; ////55,538
}

function getTotalDay1Part2(stringValues) {

  let days = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let total = [];

  let dayMap = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9"
  }

  for (let i = 0; i < stringValues.length; i++) {

    let numArray = [];

    for (const [, day] of days.entries()) { 


      let position = -1;
      while ((position = stringValues[i].indexOf(day, position + 1)) !== -1) {
        numArray[position] = day;
        //console.log(`Found ${day} at position ${position}`);
      }
      
      //console.log(numArray);
      // Clear the null from the array
      numArray = numArray.filter(element => element !== null);
      //console.log(numArray);

      // Iterate through the array and replace elements with the right values from dayMap
      for (let i = 0; i < numArray.length; i++) {
        let currentValue = numArray[i];

        // Check if currentValue exists as a key in dayMap
        if (dayMap[currentValue] !== undefined) {
            // If it does, replace the element with the corresponding value from dayMap
            numArray[i] = dayMap[currentValue];
        }
      }
    }
    
    //console.log(numArray);

    if (numArray.length > 1) {
      total.push(numArray[0] + numArray[numArray.length-1]);
    }
    else {
      total.push(numArray + numArray);
    }
    //console.log(total);
  }
  let sum = 0;
  for (let i = 0; i < total.length; i++) {
    sum += Number(total[i]);
  }
  //console.log(sum);
  return sum; // 54,875
}


function App() {

  //Declare useState
  const [txtData, setTxtData] = useState("En cours de chargement...");

  // Declare useEffect that fetch the data in the text file
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/input.txt")
    .then(r => r.text())
    .then(text => {
      setTxtData(text)
    });
  }, [])

  var txtArray = txtData.split("\n");

   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>adventofcode.com/2023</code> 
        </p>
      </header>
      <div className="App-body">
        <div className="display-linebreak">
          <a
            className="App-link"
            href="https://adventofcode.com/2023/day/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Day 1, part 1 : Trebuchet?!
          </a>&nbsp;:&nbsp;
           {getTotalDay1Part1(txtArray)} 
        </div>
        <div className="display-linebreak">
          <a
            className="App-link"
            href="https://adventofcode.com/2023/day/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Day 1, part 2: Trebuchet?!
          </a>&nbsp;:&nbsp;
           {getTotalDay1Part2(txtArray)} 
        </div>
      </div>
    </div>
  );
}

export default App;

