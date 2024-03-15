import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

export default function Navigation() {
  const count = useSelector((state) => state?.todos);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", gap: "20px" }}
            navbarScroll
          >
            <NavLink to="/">Product</NavLink>
            <NavLink to="/Cart">Cart</NavLink>
          </Nav>
          <NavLink to="/Cart">my bag{count.length}</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
