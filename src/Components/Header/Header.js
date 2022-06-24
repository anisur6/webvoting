import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';






const Header = () => {

    const { logOut, user } = useAuth();

    

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container className='p-2' >
                <Navbar.Brand href="/home" className='fw-bold'>
                    <img
                        alt="homeimg"
                        src="https://img.icons8.com/fluency/344/old-vmware-logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    E-VOTE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                   

                       
                          
                            <Nav.Link href="#action1" className='fs-5 text-light'>
                                <Link to="/addservice">Add Contendor</Link>
                            </Nav.Link>
                            <Nav.Link href="#action1" className='fs-5 text-light'>
                                <Link to="/contendor">Contendor</Link>
                            </Nav.Link>
                            <Nav.Link href="#action1" className='fs-5 text-light'>
                                <Link to="/allvotes">All Votes</Link>
                            </Nav.Link>
                        
                    </Nav>


                  
                        
                  
                            <div className="d-flex">
                          
                            {
                                user?.email && <div><img className="rounded-circle me-3" width="40px" src={user.photoURL} alt="" /><span className="me-2 text-warning">{user.displayName}</span></div>
                            }


                            {
                                user?.email ? <Button className="btn" variant="warning" onClick={logOut}>LogOut</Button>
                                    :
                                    <Link to="/login">
                                        <Button className="btn" variant="success">Login/Register</Button>
                                    </Link>
                            }
                                </div>
                                

                  
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </>
    );
};

export default Header;