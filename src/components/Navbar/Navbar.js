import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

function NavHeader() {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      style={{ display:'flex', width: "100%", position: "fixed", top: 0, left: 0, right: 0 , zIndex:9999}}
    >
      <Container>
        <Navbar.Brand style={{ color: "white" }}>
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="link"
          >
            <h5>Homes4Families.com</h5>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                activeClass="active"
                to="properties"
                spy={true}
                smooth={true}
                offset={-100}
                duration={5}
                className="link"
              >
                <h5>Properties</h5>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={5}
                className="link"
              >
                <h5>Contact</h5>
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                activeClass="active"
                to="testimonial"
                spy={true}
                smooth={true}
                offset={-100}
                duration={5}
                className="link"
              >
                <h5>Testimonial </h5>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
