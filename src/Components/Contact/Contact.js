import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import contact from '../../contact.png'
import './Contact.css'


const Contact = () => {
  return (
    <div>
      <Container className="contactBase">
        <div>
          <h1 className="header">Get in Touch with in  one click... !!</h1>
          <hr />
          <br />

          <Row>
            <Col sm={6} className="contact">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Massage</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="info" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>


            <Col sm={6}>

              <img className="about-img" src={contact} alt="" />

            </Col>
          </Row>


        </div>
      </Container>
    </div>
  );
};

export default Contact;