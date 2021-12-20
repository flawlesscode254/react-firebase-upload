import { useState } from 'react';
import './App.css';
import db, {store} from "./firebase"

function App() {
  const [image, setImage] = useState(null)
  const [started, setStarted] = useState(false)

  const handleFile = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    await setStarted(!started)
    await store.ref(`images/${image.name}`).put(image)
    await store.ref("images")
      .child(image.name)
      .getDownloadURL()
      .then((url) => {
        db.collection("images").add({
          image: url
        })
      })
      .then(() => {
        await setStarted(started)
      })
  }

  return (
    <div className="App">
      {started ? (
        <p>Uploading</p>
      ) : (
      <input type="file" onChange={handleFile} />
      )}

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;
