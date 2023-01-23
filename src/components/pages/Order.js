import React, { useState, useEffect} from 'react';
import '../Adder.css'
import { Typeahead } from 'react-bootstrap-typeahead';
import DashFoot from '../DashFoot'
import Basket from '../shop/Basket'
import data from '../shop/data';

async function AddOrder(values) {

    fetch('https://localhost:5000/order',{
      method: 'POST',
      body:JSON.stringify({
        order_id: values.order_id,
          shopping: values.shopping,
          client: values.client,
          status:values.status,
      }),
      headers:{
          "Content-type": "application/json; charset=UTF-8"
      }
  }).then(response => response.json())
  .then(message => {
      console.log(message)
  })
   }




function Order() {
    const { products } = data;

    const [singleSelections, setSingleSelections] = useState([]);
    const [clients, setClients] = useState([]);
    const [deals, setDeals] = useState([]);
    const [order_id, setOrder_id] = useState();
    const [client, setClient] = useState();
    const [shopping, setShopping] = useState();
    const [submitt, setSubmitt]  = useState(false)
    const EnableIt = () => setSubmitt(true);
    const [cartItems, setCartItems] = useState([]);

    function enterIt(item){

      console.log('item');
      setDeals(item);
    }


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


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await AddOrder({
            order_id,
            client,
            shopping,
        });
        // setToken(token);
        // console.log('adssad')
      }

      useEffect(()=>{
        fetch("http://localhost:5000/clint").then(
            res => res.json()
        ).then(
            data=> {
                setClients(data)
                // console.log(data)
            }
        )
    },[])


        return (
<>
<div className='form-box'>
            <h1>Make An Order</h1>
            <div className='login-wrapper'>
                <div className='image'>
                    {/* <img src={loginImg}/> */}
                </div>
            <form onSubmit={handleSubmit}>
                            
                            <div className='form-group'>
                                <label htmlFor='client'>Client Name</label>
                                <Typeahead
                    
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={setSingleSelections}
                    options={clients}
                    placeholder='Select a Client for delivering to'
                    selected={singleSelections}
                  />
                                {/* <input type='text' name='client' placeholder='client name' onChange={e => setClient(e.target.value)}/> */}
                                
                            </div>
                            
                            <div className='form-group'>
                                <label htmlFor='shopping'>Shopping</label>
                            <div className='form-group'>

                            <select onChange={EnableIt} >
                <option key='KFC' value='KFCByo'>KFC </option>
                <option key='ChickenInn' value='CKN'>CHicken Inn</option>

            <option value="Choose Dish" selected disabled hidden>Choose Store to Buy</option>
            </select>

            {submitt ? 
                     <>
                
                <select >
                <option value="Choose" selected disabled hidden>Choose Dish</option>

                {products.map((product, index) => {
                    return (
        <option key={product.id} value={product.label} onClick={console.log(product)} > {product.text} </option>
                    )
                })}



            </select>
            <button onClick={() => onAdd(deals)} >Add to Cart</button>
            <button type="submit" className='btn-primary' margin-top='10px'>Finish Shopping</button>

                </>
            
            : null}

</div>
                            </div>
                            
                            <div margin-top='10px'>
                            </div>
            </form>
            </div>

        </div>
        <div className='otherhero'>
  <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
  </div>
        <DashFoot/>

</>
        )
}

export default Order;
