import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';

import { NavLink as ReactLink} from "react-router-dom";

function CustomNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div>
            <Navbar 
                color="dark"
                dark
                expand="md"
                fixed=""
            >
                <NavbarBrand tag={ReactLink} to="/">
                    My Blogs
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>

                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink tag={ReactLink} to="/about">
                            About
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={ReactLink} to="/login">
                            Login
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={ReactLink} to="/signup">
                            Signup
                        </NavLink>
                    </NavItem>

                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        More
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem tag={ReactLink} to="/services" >
                            Services
                        </DropdownItem>
                        <DropdownItem>Contact US</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Youtube</DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Shohag</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavbar;