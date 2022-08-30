import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {React,useState,useEffect,useRef} from 'react'


function NavBar({Theme,setTheme,setLevel,Level,Sound,setSound}) {
  const [ShowSounds,setShowSounds]=useState(true)
  
   const ChangeTheme =(ChosenTheme)  =>{
    setTheme(ChosenTheme)
    localStorage.setItem('Theme',ChosenTheme)
   }

   const ChangeSound =(ChosenSound)  =>{
    setSound(ChosenSound)
    localStorage.setItem('Sound',ChosenSound)
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
            <NavDropdown title={Sound} id="basic-nav-dropdown">
            <NavDropdown.Item  onClick={() => {ChangeSound('Mute')}}>
                Mute
            </NavDropdown.Item>
            <NavDropdown.Item  onClick={() => {ChangeSound('Cream')}} >
                Cream
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => {ChangeSound('RazerGreen')}} >
                RazerGreen
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() =>{ChangeSound('MXSpeedsSilver')}}>
                MXSpeedsSilver
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => {ChangeSound('HolyPanda')}}>
                HolyPanda
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => {ChangeSound('Bruh')}}>
                Bruh
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => {ChangeSound('Metal')}}>
                Metal
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;