import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [feedDisplay, setFeed] = useState([{title: "Name", post: "post"}])//Title & post = Button(PROMPT)
  return (
    <div>
      <DisplayEntries parentFeedDisplay={feedDisplay}/>
    </div>
  );
}

export default App;
