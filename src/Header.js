import {Navbar, Nav, Container, Button} from 'react-bootstrap';

export default function NavbarComp(props) {

    return (
        <div>
        <Navbar className="nav" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">SimpliSave</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="Home">Home</Nav.Link>
                    <Nav.Link href="StorageInventory">Storage Inventory</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Button variant="outline-success">Sign in</Button>
            </Container>
        </Navbar>
        </div>


    );
}



