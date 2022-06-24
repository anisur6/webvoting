import React, {  } from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';

const Home = () => {

   

    return (
        <>
   
        <Container>
                <Row>
                    
                    <Col sm={7} className=" text-start">
                        <div className='mt-5'>
                            
                          
                        <p className='display-1'> <span className='text-primary fw-bold'>Welcome</span>  <br></br>
                                <span className='display-4'> to the e-voting system.</span></p>
                            <div className='d-flex mt-4'>
                                    <button className='btn btn-warning fs-5 px-4 me-2 py-2'>See All Contest</button>
                                    <button className='btn btn-primary fs-5  px-5 py-2'>Vote Now</button>
                            </div>
                        </div>
                </Col>
                    

                    <Col sm={5} className="text-center">
                        <div className='mt-5'>
                        <img src='https://ouch-cdn2.icons8.com/uB1QmqLZZiAVhesxq02URbOmRq_IDXsLVpl4fwu6LWM/rs:fit:256:311/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTM1/LzAwYmFlMTQyLTM3/Y2EtNDlkNS04OTVk/LWNhOGZlNmE1MDg4/OS5wbmc.png' className='img-fluid' />
                        </div>
                </Col>
            </Row>
            </Container>
            
  
            </>
    );
};

export default Home;