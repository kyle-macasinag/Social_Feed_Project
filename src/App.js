import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import "./App.css";
function App() {

  const [feedDisplay, setFeed] = useState([{title: "", post: ""}])//Title & post = Button(PROMPT)

  function addNewEntry(entry){
    let tempEntries = [entry, ...feedDisplay];
    setFeed(tempEntries);
  }

  return (
    <div className = "container-fluid">
      <div className = "row">
        <h3 style={{margin: '1em'}}>Social 
        <small className= 'text-muted'>Feed</small></h3>
        <div className = "col-md-3">
          <div className = 'border-box'>
        <AddEntryForm addNewEntry={addNewEntry}/>
        </div>
        </div>
        <div className = "col-md-5">
        <div className = 'border-box'>
        <DisplayEntries parentFeedDisplay={feedDisplay}/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
