import React from 'react'
import Main from '../shop/Main';
import Basket from '../shop/Basket';

import data from '../shop/data';

import './OrderSmn.css'
import { useState } from 'react';
import Row from 'react-bootstrap/Row';



function OrderSmn() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };
    return (

<>
        
<Row>
<div className="hero-contain3">

<div className="hero-contain2">
  {/* <Header countCartItems={cartItems.length}></Header> */}
  {/* <div > */}

    {/* <Col xs={8} md={8} lg={8}> */}

          <Main countCartItems={cartItems.length} products={products} onAdd={onAdd}></Main>

{/* </Col> */}
{/* <Col */}
{/* > */}

{/* </Col> */}
        {/* </div> */}
      </div >

        </div>
        </Row>
<Row>
  <div className='otherhero'>
  <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
  </div>

</Row>


</>

    );
  }
  


export default OrderSmn