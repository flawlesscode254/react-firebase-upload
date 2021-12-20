import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <input type="file" onChange={handleFile} />
    </div>
  );
}

export default App;
