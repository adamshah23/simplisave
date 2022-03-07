import './Storageinventory.css';
import NavbarComp from './Header';
import {Table, Button, Form} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


export default function Storage() {

    let navigate = useNavigate(); 
 	const routeChange = () =>{ 
    	let path = `/Results`; 
    	navigate(path);
	 }

    return (
    <div className='storage-page'>
        <NavbarComp/>
        <div className='outside-box'>
            <div className='tables'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Produce</th>
                        <th>Packaged Date</th>
                        <th>Expired Status</th>
                        <th>Quantity</th>
                        <th>Donate?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Apples</td>
                        <td>12/06/2021</td>
                        <td>Not Expiring Soon</td>
                        <td>120</td>
                        <td><Form className='checks'>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                />
                                </div>
                            ))}
                            </Form>
                        </td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Salmon</td>
                        <td>12/07/2021</td>
                        <td style={{color:'lightcoral'}}>Expiring Soon</td>
                        <td>60</td>
                        <td><Form className='checks'>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                />
                                </div>
                            ))}
                            </Form>
                        </td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Oranges</td>
                        <td>12/08/2021</td>
                        <td style={{color:'lightcoral'}}>Expiring Soon</td>
                        <td>150</td>
                        <td><Form className='checks'>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                />
                                </div>
                            ))}
                            </Form>
                        </td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Peaches</td>
                        <td>12/09/2021</td>
                        <td>Not Expiring Soon</td>
                        <td>100</td>
                        <td><Form className='checks'>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                />
                                </div>
                            ))}
                            </Form>
                        </td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>Whole Wheat Bread</td>
                        <td>12/10/2021</td>
                        <td style={{color:'lightcoral'}}>Expring Soon</td>
                        <td>90</td>
                        <td><Form className='checks'>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                />
                                </div>
                            ))}
                            </Form>
                        </td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td>White Bread</td>
                        <td>12/20/2021</td>
                        <td>Not Expiring Soon</td>
                        <td>90</td>
                        <td><Form className='checks'>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                />
                                </div>
                            ))}
                            </Form>
                        </td>
                        </tr>
                        <tr>
                        <td>7</td>
                        <td>Chicken Breasts</td>
                        <td>12/25/2021</td>
                        <td style={{color:'lightcoral'}}>Expring Soon</td>
                        <td>60</td>
                        <td><Form className='checks'>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                />
                                </div>
                            ))}
                            </Form>
                        </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
      
            <div className='donate-button'>
                <Button onClick={routeChange} variant="primary">Donate Here!</Button>{' '}
            </div>
        </div>

    </div>
    
      

    );
}