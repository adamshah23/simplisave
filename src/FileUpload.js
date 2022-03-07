import './FileUpload.css';
import React, {useState} from 'react';
import {BiFile} from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

export default function FileUploadPage(){
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	let navigate = useNavigate(); 
 	const routeChange = () =>{ 
    	let path = `/StorageInventory`; 
    	navigate(path);
	 }

	return(
    <div>
            <div className='pdf-icons'> 
                <BiFile style={{height:100, width:100}}/>
                <p>Add Your File</p>
            </div>
             <div className='inputy'> 
                 <input type="file" name="file" onChange={changeHandler} />
             </div>
			{isSelected ? (
				<div>
				</div>
			) : (
				<p></p>
			)}
			<div className='submit-button'>
                <button onClick={routeChange}>Submit</button>
			</div>
		</div>
	)
}