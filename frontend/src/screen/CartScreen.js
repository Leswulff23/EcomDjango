import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate , useLocation} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form, ListGroupItem } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../reducers/cartSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'

const CartScreen = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const prodid = useParams()
    const qty = searchParams.get('qty');

   const dispatch = useDispatch()

   useEffect(() =>{
        if(prodid)
        {
            dispatch(addToCart(prodid, qty))
        }
   }, [dispatch, prodid, qty])

  return (
    <div>
      Cart
    </div>
  )
}

export default CartScreen
