import React, { useState , useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button'

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  console.log('App Running')
 const [showParagraph, setShowParagraph] = useState(false);

 const ToggleParagraphHandler = useCallback(() => {
   setShowParagraph(prevShowParagraph => !prevShowParagraph)
 },[]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
       {/* <DummyList items ={ useMemo(() =>[1,2,5,7,9],[])}></DummyList> */}
      <DemoOutput show={showParagraph} />
      <Button onClick={ToggleParagraphHandler}> Toggle Paragraph</Button>
    </div>
  );
}

export default App;
