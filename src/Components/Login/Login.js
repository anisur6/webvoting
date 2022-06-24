import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    console.log(user);

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
  
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