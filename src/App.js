import logo from './pluginIcon.png';
import './App.css';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';


function App() {

  const [txtData, setTxtData] = useState("En cours de chargement...");


  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/input.txt")
    .then(r => r.text())
    .then(text => {
      setTxtData(text)
    });
  }, [])

  var s = txtData;
  s.split(" ").forEach(character => console.log(character));

  const typo2 = typeof(txtData);

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
        {txtData}
      </div>
    </div>
  );
}

export default App;
