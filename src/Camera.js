import './FileUpload.css';
import React, {useState} from 'react';
import {BiCamera} from 'react-icons/bi';
import Camera from 'react-snap-pic';

export default function UploadPhoto(){
	const [showCamera, setShowCamera] = useState(false)

    const imager = null
    const takePicture = (img) => {
        imager = img
        setShowCamera(false)
    }

    const handleSubmission = () => {
		const formData = new FormData();

		formData.append('Image', imager);

		fetch(
			'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	return(
    <div>
            <div className='pdf-icons'> 
                <BiCamera style={{height:100, width:100}}/>
                <p>Add Your Photo</p>
            </div>
             <div className='inputy'> 
                 <input type="file" name="image-file" onChange={showCamera && <Camera takePicture = {takePicture}/>} />
             </div>
			 <p></p>
			<div className='submit-button'>
                <button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}