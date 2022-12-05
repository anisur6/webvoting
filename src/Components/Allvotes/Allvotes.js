import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';

const Allvotes = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])


    const uniqueContendor = [ ];
 
    order.map((vote) => {
      const contendorId = vote.single._id;
      const index = uniqueContendor.findIndex((item) => item._id === contendorId);
     
      if (index === -1) {
        const contendor = { ...vote.single, count: 1 };
        uniqueContendor.push(contendor);
      } else {
        uniqueContendor[index]["count"] += 1;
      }
    });
     
    // uniqueContendor.forEach((contendor) => {
    //     return (
    //         console.log(contendor.name, contendor.count)
    //    )
    //   });





    return (



        <>
            <Container>
                <Row xs={1} md={1} className="p-3">

                    <Col md={3} className="my-5">


                        
                       
                                <Card style={{ width: '15rem' }} className="text-center p-3 mx-auto">
                                <Card.Body>
    
                                    <p className=' fs-5 fw-bold'>Total Votes</p>
                                    <p className='mt-3 text-primary fs-2 fw-bold'>{order.length}</p>
    
                                </Card.Body>
                            </Card>                      
                    </Col>

                    
                    {
                        uniqueContendor.map((contendor) => {
                            return (
                               
                                <Col md={3} className="my-5">
                                    <Card style={{ width: '15rem' }} className="text-center p-3 mx-auto">
                                        <Card.Body>

                                                    <p className=' fs-5 fw-bold'>{contendor.name}</p>
                                            <p className='mt-3 text-primary fs-2 fw-bold'>{contendor.count}</p>

                                        </Card.Body>
                                    </Card>
                                </Col>
                        
                            )
                           
                           
                          })
                }

                    


                    <Table striped hover>
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

                                  

                                    <tr key={single._id}>
                                        <td><img src={single.single.img} style={{ height: '100px', width: 'auto' }} /> </td>
                                        <td>{single.single.name}</td>
                                        <td>   _________</td>
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