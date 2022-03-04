import './App.css';
import NavbarComp from './Header';
import FileUploadPage from './FileUpload'
import UploadPhoto from './Camera'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Storage from './StorageInventory';


export default function Router() {
    return ( 
    <BrowserRouter> 
      <Routes>
        <Route path="/" element= {<App/>} />
        <Route path="/StorageInventory" element= {<Storage/>} />
        <Route path="/Home" element= {<App/>} />
      </Routes>
    </BrowserRouter>
    );
  }


function App() {

  return (
    <div className="App">
      <NavbarComp/>

      <div className="slogan"> Simpily save money by donating and keeping track of your inventory! </div>
      <div className= "text">Upload your files</div>
      <div className="upload-data">
          <div className="pdf"> 
              <FileUploadPage/>
          </div>
        
          <p> OR </p>

          <div className="camera">
              <UploadPhoto/>
          </div> 
      </div>
    </div>
  );
}
