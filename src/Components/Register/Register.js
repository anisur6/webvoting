import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, SetLoginData] = useState({});
    const history = useHistory();



    const { registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value, newLoginData);
        SetLoginData(newLoginData)
    }


    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert('password not metched....!!!')
            return
        }
        if (loginData.password === loginData.password2) {
            alert('are you sure to Register ?')

        }

        registerUser(loginData.email, loginData.password, loginData.name, history)

        e.preventDefault();
    }






    return (
        <>
            
            <Container className="mt-5">
                <h2 className="h2">Please Register <span>to Get Access</span></h2>

                <hr />

                <Row>
                    <Col md={6}>

                        <div className="my-5">
                            {!isLoading && <Form onSubmit={handleLoginSubmit} className="text-start">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Your Name</Form.Label>
                                    <Form.Control type="text"
                                        name="name" onBlur={handleOnBlur}
                                        placeholder="Enter Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email"
                                        name="email" onBlur={handleOnBlur}
                                        placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"
                                        name="password" onBlur={handleOnBlur}
                                        placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"
                                        name="password2" onBlur={handleOnBlur}
                                        placeholder="Confirm Password" />
                                </Form.Group>

                                <Button variant="success" type="submit">
                                    Register
                                </Button>
                            </Form>}

                        {isLoading && <Spinner animation="grow" variant="success" />}


                            <Link to="/login"><p className="text-success fw-bold fs-5">Already Registered ? Please Login</p></Link>
                            <hr />
                        </div>
                    </Col>



                    <Col md={6}>
                        <div className="sideImg">
                    
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
};

export default Register;