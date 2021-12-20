import { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null)

  const handleFile = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  return (
    <div className="App">
      <input type="file" onChange={handleFile} />
      <button onC>Upload</button>
    </div>
  );
}

export default App;
