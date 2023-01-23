import React, { useState } from 'react';
import '../Adder.css'
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import options from '../data/MoverData'
import DashFoot from '../DashFoot'


async function AddClient(values) {

    fetch('https://localhost:5000/delivery',{
      method: 'POST',
      body:JSON.stringify({
          delivery_id: values.delivery_id,
          route: values.route,
          client: values.client,
          delivDate:values.deliv_date,
        mover: values.mover
      }),
      headers:{
          "Content-type": "application/json; charset=UTF-8"
      }
  }).then(response => response.json())
  .then(message => {
      alert(message)
      
  })
   }

   
function Delivery() {

    const [singleSelections, setSingleSelections] = useState([]);


    const [delivery_id, setDelivery_id] = useState();
    const [client, setClient] = useState();
    const [mover, setMover] = useState();
    const [route, setRoute] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await AddClient({
            delivery_id,
            client,
            mover,
            route
        });
        // alert("Your client has been added")
        // setToken(token);
      }

        return (

        <div className='form-box'>
            <div className='header'>Add A New Delivery</div>
            <div className='login-wrapper'>
                <div className='image'>
                    {/* <img src={loginImg}/> */}
                </div>
            <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor='delivery_id'>Delivery ID</label>
                                <input type='text' name='delivery_id' placeholder='Client Name' onChange={e => setDelivery_id(e.target.value)}/>
                            </div>
                            
                            <div className='form-group'>
                                <label htmlFor='client'>Order Code</label>
                                <input type='text' name='client' placeholder='client' onChange={e => setClient(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='mover'>Mover To Use</label>
                                {/* <input type='text' name='mover' placeholder='Mover' onChange={e => setMover(e.target.value)}/> */}
                                
                                         <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={setSingleSelections}
          options={options}
          placeholder="Choose a mover..."
          selected={singleSelections}
        />
                            </div>

                            <div>
                            <button type="submit">Add Delivery</button>
                            </div>
            </form>
            </div>
            <DashFoot/>
        </div>)
}

export default Delivery;
