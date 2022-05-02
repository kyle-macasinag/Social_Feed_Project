import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
function App() {

  const [feedDisplay, setFeed] = useState([{title: "", post: ""}])//Title & post = Button(PROMPT)

  function addNewEntry(entry){
    let tempEntries = [entry, ...feedDisplay];
    setFeed(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentFeedDisplay={feedDisplay}/>
      <AddEntryForm addNewEntry={addNewEntry}/>
    </div>
  );
}

export default App;
