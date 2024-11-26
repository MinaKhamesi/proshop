import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { useGetProductsQuery } from '../slices/productsApiSlice';

import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';

const HomeScreen = () => {
  const {data:products, isLoading, error} = useGetProductsQuery();
  return ( isLoading ? <Loader/> : error ? <Message variant='danger'>{
    error?.data?.message || error.error
  }</Message> :
    <>
    <h2>Latest Products:</h2>
    <Row>
      {products.map((product)=> (
        <Col sm={12} md={6} l={4} xl={3} key={product._id}>
          <Product product={product}/>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default HomeScreen