import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default class UserNavbar extends Component {
  render() {
    return (
      <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to='/'>Arbitrary Cooking App</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>

              <LinkContainer to='/recipes'>
                <NavItem>
                  recipes
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/addrecipe'>
                <NavItem>
                  Add Recipe
                </NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <NavItem >
                <FontAwesomeIcon icon="user" />
              </NavItem>
              <NavItem >
                <FontAwesomeIcon icon="user-plus" /> 
              </NavItem>
            </Nav>
          </Navbar>
      </div>
    )
  }
}
