import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import { Row, Col , Image, Card, Button, ListGroup} from 'react-bootstrap';

import Rating from '../components/Rating';

const ProductScreen = () => {
  const [product, setProduct] = useState()

  const {id} = useParams()

  useEffect(()=>{
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${id}`);
      setProduct(data)
    }

    fetchProduct();
  }, [id])
  return (
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