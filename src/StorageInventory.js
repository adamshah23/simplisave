import './Storageinventory.css';
import NavbarComp from './Header';
import Table from 'react-bootstrap/Table'

export default function Storage(props) {

    return (
    <div className='storage-page'>
        <NavbarComp/>
        <div className='tables'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quality</th>
                    <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>

    </div>
    
      

    );
}