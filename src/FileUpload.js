import './FileUpload.css';
import React, {useState} from 'react';
import {BiFile} from 'react-icons/bi';

export default function FileUploadPage(){
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

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
                <BiFile style={{height:100, width:100}}/>
                <p>Add Your File</p>
            </div>
             <div className='inputy'> 
                 <input type="file" name="file" onChange={changeHandler} />
             </div>
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p></p>
			)}
			<div className='submit-button'>
                <button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}