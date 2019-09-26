import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import '../cars/style.css';





const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  }

  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand href="/"><h5>Car Creator</h5></NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>


            <NavItem>
              <Button onClick={props.clickLogout} color="warning">Logout</Button>
            </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Sitebar;
