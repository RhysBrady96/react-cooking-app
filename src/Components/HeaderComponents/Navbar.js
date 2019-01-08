import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class UserNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Arbitrary Cooking App</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Recipies
            </NavItem>
            <NavItem eventKey={2} href="#">
              Add Your own
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem >
              <FontAwesomeIcon icon="user" />
            </NavItem>
            <NavItem >
              <FontAwesomeIcon icon="user-plus" /> 
            </NavItem>
          </Nav>
            {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown> */}
          
        </Navbar>
      </div>
    )
  }
}
