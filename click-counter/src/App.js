import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App" onClick = {() => setCount(count+1)}>
      This was clicked {count} times.
    </div>
  );
}

export default App;
