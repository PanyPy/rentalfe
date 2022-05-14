import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
const DefaultBar = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Assigment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link"> Home</NavLink>
            <NavLink to="/appartments" className="nav-link"> Appartments</NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item>This is</NavDropdown.Item>
              <NavDropdown.Item>NOT</NavDropdown.Item>
              <NavDropdown.Item>Implemented</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>yet ;)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default DefaultBar