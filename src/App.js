import './App.css';
import NavbarComp from './Header';
import Camera from 'react-snap-pic';
import { useState } from "react";
import {BiCamera } from 'react-icons/bi'

function App() {
 
  const [showCamera, setShowCamera] = useState(false)
 

  function takePicture (img) {
    console.log(img)
    setShowCamera(false)
  }
 
  return (
    <div className="App">
      <NavbarComp/>

      <div className="slogan"> Simpily save money by donating and keeping track of your inventory! </div>
      <div className= "text">Upload your files</div>
      <div className="upload-data">
          <div className="pdf">
            <img src="https://cdn.icon-icons.com/icons2/1276/PNG/512/1497559948-24_85014.png" width="70" height="70"/>
          </div>

          <p> OR </p>

          <div className="camera"> {showCamera && <Camera takePicture = {takePicture} />} 
              <button onClick={showCamera}
                style={{left:10, right:'auto'}}>
                <BiCamera style={{height:65, width:65}} />
            </button>
          </div> 
      </div>
    </div>
  );
}

export default App;
