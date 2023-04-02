
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="#">
              GameForge
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
       
      </Container>
    </footer>
  );
}

export default Footer;
