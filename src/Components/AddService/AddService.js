import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './AddService.css'




const AddService = () => {
    const { register, handleSubmit, reset } = useForm();


    swal({
        title: "Success",
        text: "Alert successful",
        icon: "success",
        confirmButtonText: "OK",
    });




    const onSubmit = data => {

        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    window.alert('Are you Sure to Add contendor ?');
                    reset();
                }

            })

    }






    return (
        <div className="add-service">
            <Container>
                <h2 className="h2 my-5">ADD  <span>SERVICES</span></h2><hr />

                <Row>
                    <Col md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input className="p-2" {...register("name", { required: true, maxLength: 20 })} placeholder="name" />

                            <textarea className="p-2" {...register("description")} placeholder="Add description" />

                            <input className="p-2" type="number" {...register("vote")} placeholder="Default Vote" />

                

                            <input className="p-2" {...register("img")} placeholder="image Url" />
                            <input className="p-2 text-light bg-success fw-bold"
                                onClick={swal} type="submit" />
                        </form>
                    </Col>

                    <Col md={6}>
                        <div className="sideImg">

                        </div>
                    </Col>
                </Row>
                <hr />
                <Link to="/">
                    <button className="btn btn-success text-light fw-bold fs-3 my-3">Back to Home</button>
                </Link>
            </Container>
        </div>
    );
};

export default AddService;