import React, { useEffect, useState } from 'react';
import {  Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contendor = () => {

    const [man, setman] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setman(data));
    }, [])


    return (
        <>
            <Container>
                <Row>

                    {
                        man.map((mans) => (
                            <Col key={mans._id} md={4}>
                                <Card className='my-5 p-3 shadow border-0 text-center' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={mans.img} style={{ height: '300px', width: 'auto' }} />
                                    <Card.Body>
                                        <Card.Title>{mans.name}</Card.Title>
                                        <Card.Text> {mans.description}</Card.Text>
                                        <Card.Text>{mans.vote}</Card.Text>
                                        

                                        <Link className='btn btn-warning px-3 py-2 rounded-2' to={`/booking/${mans._id}`} variant="primary">Vote For {mans.name}</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                        )
                    }





                </Row>
            </Container>


        </>
    );
};

export default Contendor;