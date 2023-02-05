import React from 'react'
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"
const Header = () => {
    return (


        <>
            <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
                <Container>
                  
                    <Nav className="me-auto">
                        <NavLink  className = "text-decoration-none text-light mx-3" to="/">Home</NavLink>
                        <NavLink className = "text-decoration-none text-light mx-3" to="#features">About</NavLink>
                        <NavLink className = "text-decoration-none text-light mx-3" to="#pricing">Contact</NavLink>
                    </Nav>
                    <Badge badgeContent={4} color="primary">
                    <i class="fa-sharp fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: 'pointer' }} ></i>
                    </Badge>
                    
                </Container>
            </Navbar>

        </>
    );
}


export default Header


