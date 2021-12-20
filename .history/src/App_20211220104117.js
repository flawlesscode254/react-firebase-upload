import { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null)

  const handleFile = ()

  return (
    <div className="App">
      <input type="file" onChange={handleFile} />
    </div>
  );
}

export default App;
