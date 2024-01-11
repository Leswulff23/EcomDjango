import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../reducers/productSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'

function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList1)
  const {error, loading, products} = productList
  // useEffect triggered if component changes
  useEffect(() =>{
    dispatch(listProducts())
     
  }, [dispatch])

  return (
    <div>
      <h1>Latest</h1>
      {loading ? <Loader/>
        : error ? <p><Message variant='danger'>{error}</Message></p> 
         :  <Row>
                {products.map(product =>(
                    <Col key={product._id} sm={12} md ={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
    }
      
    </div>
  )
}

export default HomeScreen
