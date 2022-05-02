import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
function App() {

  const [feedDisplay, setFeed] = useState([{title: "Name", post: "post"}])//Title & post = Button(PROMPT)
  return (
    <div>
      <DisplayEntries parentFeedDisplay={feedDisplay}/>
      <AddEntryForm/>
    </div>
  );
}

export default App;
