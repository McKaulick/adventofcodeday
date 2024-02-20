import logo from './pluginIcon.png';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

function getTotal(stringValues) {
  var total = "";
  var totalString = "";
  var totalString1 = "";
  var count = 0;
  var totalString2 = "";

  for (let i = 0; i < stringValues.length; i++) {
    for (const char of stringValues[i]) {
      if (!isNaN(char)) {
        count = count + 1;
        if (totalString1 == "") {
          totalString1 = totalString1 + char;
        }
        else {
          totalString2 = "";
          totalString2 = char;
        }
      }
    }
    if (count == 1) {
      totalString = totalString1 + totalString1;
    }
    else {
      totalString = totalString1 + totalString2;
    }
    total = Number(total) + Number(totalString);
    count = 0;
    totalString = "";
    totalString1 = "";
    totalString2 = "";
  }
  return "total: "+total; //55,538
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
        <a
          className="App-link"
          href="https://adventofcode.com/2023/day/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Day 1: Trebuchet?!
        </a>
      </header>
      <div className="App-body">
        <div className="display-linebreak">
           {getTotal(txtArray)} 
        </div>
      </div>
    </div>
  );
}

export default App;

