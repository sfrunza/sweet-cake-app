import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const NavLink = ({ exact, to, eventKey, children }) =>
  <LinkContainer exact={exact} to={to} eventKey={eventKey}>
    <NavItem>{children}</NavItem>
  </LinkContainer>;

class NavigationBar extends Component {
    constructor(props) {
      super(props)
      }

    render(){
       return(
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="home">Sweet-Cakes</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight >
                <NavLink eventKey={1} componentClass={Link} href="/home" to="/home">Home</NavLink>
                <NavLink eventKey={2} componentClass={Link} href="/photo" to="/photo">Photo</NavLink>
                <NavLink eventKey={3} componentClass={Link} href="/pricing" to="/pricing">Pricing</NavLink>
                <NavLink eventKey={4} componentClass={Link} href="/contact" to="/contact">Contact</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        )
    }
}

export default NavigationBar;
