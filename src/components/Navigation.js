import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar({Theme,setTheme,setLevel,Level}) {


   const ChangeTheme =(ChosenTheme)  =>{
    setTheme(ChosenTheme)
    localStorage.setItem('Theme',ChosenTheme)
   }

   const ChangeLevel =(ChosenLevel)  =>{
    setLevel(ChosenLevel)
    localStorage.setItem('Level',ChosenLevel)
   }
  return (
    <Navbar className={`${Theme=='Light'? 'navbar-light' : 'navbar-dark'}`}>
      <Container>
        <Navbar.Brand >10Fingers-React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">            
            <NavDropdown title={Theme} id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={() => ChangeTheme('Lawrencium')}>Lawrencium</NavDropdown.Item>
              <NavDropdown.Item  onClick={() => ChangeTheme('Light')} >
                Light
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => ChangeTheme('Dark')}>
                Dark
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => {ChangeTheme('Royal')}}>
                Royal
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => {ChangeTheme('Netflix')}}>
                Netflix
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => {ChangeTheme('ManOfSteel')}}>
              ManOfSteel
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => {ChangeTheme('LoveAndLiberty')}}>
              LoveAndLiberty
              </NavDropdown.Item>                                       
            </NavDropdown>
            <NavDropdown title={Level} id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={() => {ChangeLevel('Easy')}} >
                Easy
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() =>{ChangeLevel('Medium')}}>
                Medium
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => {ChangeLevel('Hard')}}>
                Hard
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => {ChangeLevel('Extreme')}}>
                Extreme
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;