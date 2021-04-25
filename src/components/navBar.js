import logo from '../img/logo.svg'
import { Navbar, Nav} from "react-bootstrap"
function NavBar(){
  return(
<div className="container">
<Navbar collapseOnSelect expand="lg" className="px-5 mx-3">
  <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto pt-1">
      <Nav.Link className="nav-link" href="#Abous us">About us</Nav.Link>
      <Nav.Link className="nav-link" href="#Career">Career</Nav.Link>
      <Nav.Link className="nav-link" href="#Departments">Departments</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  ) 
}
export default NavBar
