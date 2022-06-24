import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

const Allvotes = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://obscure-caverns-79516.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])


    return (
        <>
            <Container>
                <Row xs={1} md={1} className="p-3">
                <Table striped  hover>
                            <thead>
                              <tr>
                                <th>Contendor Image</th>
                                <th>Contendor Name</th>
                                <th>Vote Given By</th>
                                <th>Voter Name</th>
                                <th>Voter Email</th>
                              </tr>
                            </thead>
                            <tbody>
                        {
                        order.map(single => (
                            
                              <tr>
                                        <td><img src={single.single.img} style={{height: '100px', width: 'auto'}}  /> </td>
                                        <td>{single.single.name}</td>
                                        <td>{single.single.vote}</td>
                                        <td>{single.name}</td>
                                        <td>{single.email}</td>
                              </tr>
                           
                            ))
                        }
                         </tbody>
                          </Table>

                    </Row>

                </Container>
        </>
    );
};

export default Allvotes;