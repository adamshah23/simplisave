import './App.css';
import NavbarComp from './Header';
import FileUploadPage from './FileUpload'
import UploadPhoto from './Camera'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Storage from './StorageInventory';
import Results from './results';


export default function Router() {
    return ( 
    <BrowserRouter> 
      <Routes>
        <Route path="/" element= {<App/>} />
        <Route path="/StorageInventory" element= {<Storage/>} />
        <Route path="/Home" element= {<App/>} />
        <Route path="/Results" element= {<Results/>} />
      </Routes>
    </BrowserRouter>
    );
  }


function App() {

  return (
    <div className="App">
      <NavbarComp/>

      <div className="slogan"> Simpily save time by donating excess food through our storage inventory platform! </div>
      <div className= "text">Upload Your Files Here</div>
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
