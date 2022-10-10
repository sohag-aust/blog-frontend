import React, { useEffect, useState } from 'react';
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

import { NavLink as ReactLink, useNavigate} from "react-router-dom";
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';
import { toast } from 'react-toastify';

function CustomNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        setLoggedIn(isLoggedIn());
        setUser(getCurrentUserDetail());
    }, [loggedIn]);

    const toggle = () => {
        setIsOpen(prev => !prev);
    };

    const logout = () => {
        doLogout(()=>{
            toast.success("Logout Successfully");
            setLoggedIn(prev => !prev);

            navigate("/");
        });
    }

    return (
        <div>
            <Navbar 
                color="dark"
                dark
                expand="md"
                fixed=""
                className='px-5'
            >
                <NavbarBrand tag={ReactLink} to="/">
                    My Blogs
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>

                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink tag={ReactLink} to="/">
                            News Feed
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={ReactLink} to="/about">
                            About
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={ReactLink} to="/services">
                            Services
                        </NavLink>
                    </NavItem>

                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        More
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>Contact US</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Youtube</DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>

                <Nav navbar>
                    {
                        loggedIn && 
                            <>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/user/profile-info">
                                        ProfileInfo
                                    </NavLink>
                                </NavItem>

                                <NavbarText tag={ReactLink} to="/user/dashboard">
                                    {user?.email}
                                </NavbarText>

                                <NavItem>
                                    <NavLink onClick={logout}>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </>
                    }

                    {
                        !loggedIn && 
                            <>
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
                            </>
                    }
                </Nav>

                {/*  */}
                </Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavbar;