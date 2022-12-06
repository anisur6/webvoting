import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const VoteConfirm = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const { userId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://web-vote-backend.vercel.app/services/${userId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])



    const onSubmit = data => {
        data.single = service;
        axios.post('https://web-vote-backend.vercel.app/bookings', data)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    window.alert('Are you Sure to Add contendor ?');
                    reset();
                }
            })

    }







    return (
        <>
            <Container>
                {/* <h2>this is single vote confirm route...</h2> */}
                <Row>
                    <Col md={6}>
                        <Card className='my-5 p-3 mx-auto shadow border-0 text-center' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={service.img} style={{ height: '300px', width: 'auto' }} alt="contendor-img" />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text> {service.description}</Card.Text>
                                <Card.Text>{service.vote}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='mt-5'>
                        <p className='fw-bold fs-1'>Be Confirm to Vote</p>

                        {
                            user.email ? <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control mt-3" {...register("name")} value={user.displayName} />

                                <input className="form-control mt-3" {...register("email")} value={user.email} />
                                <input className="form-control mt-3 btn btn-md btn-warning fw-bold" type="submit" />

                                <Link to="/home">
                                    <button className="form-control mt-3 btn btn-success fw-bold">Back to Home</button>
                                </Link>
                            </form> : ' '

                        }

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default VoteConfirm;