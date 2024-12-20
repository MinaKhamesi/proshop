import React from 'react';
import {useParams, Link} from 'react-router-dom';
import { Row, Col , Image, Card, Button, ListGroup} from 'react-bootstrap';
import { useGetProductByIdQuery } from '../slices/productsApiSlice';

import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = () => {

  const {id} = useParams()

  const {data:product, error, isLoading} = useGetProductByIdQuery(id);

  return (
    isLoading ? <Loader/> : error ? <Message variant='danger'>{
      error?.data?.message || error.error
    }</Message> :
    <>
    <Link className="btn btn-light my-3 p-3" to='/'>Go Back</Link>
    {
      product &&  <Row>
      <Col md={5}>
         <Image src={product.image} alt={product.name} fluid/>
      </Col>
      <Col md={4}>
         <ListGroup variant='flush'>
           <ListGroup.Item>
            <h3>{product.name}</h3>
           </ListGroup.Item>
           <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
           </ListGroup.Item>
           <ListGroup.Item>
            <p>{product.price} $</p>
           </ListGroup.Item>
           <ListGroup.Item>
            <p>{product.description}</p>
           </ListGroup.Item>
           
         </ListGroup>
      </Col>
      <Col md={3}>
         <Card>
          <ListGroup variant='flush'>
            {/* <ListGroup.Item>
              <p>{product.description}</p>
            </ListGroup.Item> */}
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col><strong>{product.price}</strong></Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col><strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong></Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button disabled={product.countInStock === 0}>Add to Cart</Button>
            </ListGroup.Item>
          </ListGroup>
         </Card>
      </Col>
    </Row>
    }
   
    </>
  )
}

export default ProductScreen;