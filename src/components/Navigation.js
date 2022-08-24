import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar({Theme,setTheme}) {


   const ChangeTheme =(ChosenTheme)  =>{
    setTheme(ChosenTheme)
   }
  return (
    <Navbar className={`${Theme=='Light'? 'navbar-light' : 'navbar-dark'}`}>
      <Container>
        <Navbar.Brand href="#home">10Fingers-React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Themes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={() => ChangeTheme('Lawrencium')}>Lawrencium</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={() => ChangeTheme('Light')} >
                Light
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={() => ChangeTheme('Dark')}>
                Dark
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={() => {ChangeTheme('Royal')}}>
                Royal
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={() => {ChangeTheme('Netflix')}}>
                Netflix
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={() => {ChangeTheme('ManOfSteel')}}>
              ManOfSteel
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={() => {ChangeTheme('LoveAndLiberty')}}>
              LoveAndLiberty
              </NavDropdown.Item>                                       
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;