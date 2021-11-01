import React, { useState } from 'react';

import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	
  const changeHandler = (event) => {
    console.log(event.target.value);
  }
  const handleSubmission = (event) => {
    event.preventDefault();
    console.log('Submitted');
  }
  return (
    <div className="app">
      <div className="upload-box"></div>
      <input className="upload-input" type="file" name="file" onChange={changeHandler} />
      
			<div>
				<button className="button" onClick={handleSubmission}>Subir</button>
			</div>
    </div>
  );
}

export default App;
