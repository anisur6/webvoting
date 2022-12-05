import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { user, signInUsingGoogle, loginUser } = useAuth();
    // console.log(user);
    const [loginData, SetLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';



    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value, newLoginData);
        SetLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        alert('are you sure to login ?')
        
        e.preventDefault();
    }




  
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        <div>
            <Container className="mt-5">
                <h2 className="h2">Please Sign Up <span>to Get Access</span></h2>

                <hr />

                <Row>
                    <Col md={12}>

                    <Form onSubmit={handleLoginSubmit} className="text-start">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                    name="email" onChange={handleOnChange} placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                    name="password" onChange={handleOnChange} placeholder="Password" />
                            </Form.Group>

                            <Button variant="success" type="submit">
                                Login
                            </Button>
                        </Form>
                        <Link to="/register"><p className="text-success fw-bold fs-5"> New User? Please Register</p></Link>
                        <hr />


                       
                        <div className="my-5">
                            <Button onClick={handleGoogleLogin}  className="mx-1" variant="danger"><i class="fab fa-google"> </i>  Sign In With Google</Button>
                        </div>
                    </Col>



                   
                </Row>
            </Container>



        </div>
    );
};

export default Login;