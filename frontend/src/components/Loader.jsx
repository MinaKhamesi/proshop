import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {Container, Row} from 'react-bootstrap';

const Loader = () => {
  return (
    <Container>
      <Row className='justify-content-center align-items-center'>
        <Spinner animation="border" role="status"  size="md" >
           <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Row>
      
    </Container>
    
  )
}

export default Loader