import { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null)

  const handleFile = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleUpload = ()

  return (
    <div className="App">
      <input type="file" onChange={handleFile} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;