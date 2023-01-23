import React, { useState } from 'react';
import '../Adder.css'
import DashFoot from '../DashFoot'


async function AddClient(values) {

    fetch('http://localhost:5000/client',{
      method: 'POST',
      body:JSON.stringify({
          client_id: values.client_id,
          name: values.name,
          location: values.location,
          address:values.address,
        contact: values.phonenmb
      }),
      headers:{
          "Content-type": "application/json; charset=UTF-8"
      }
  }).then(response => response.json())
  .then(message => {
      alert(message)
      
  })
   }

function Client() {
  
    const [client_id, setClient_id] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [phonenmb, setPhonenmb] = useState();
    const [location, setLocation] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await AddClient({
            client_id,
            name,
            address,
            phonenmb,
            location
        });

      }

        return (

        <div className='form-box'>
            <div className='header'>Add A Client to System</div>
            <div className='login-wrapper'>
                <div className='image'>
                    {/* <img src={loginImg}/> */}
                </div>
            <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label htmlFor='client_id'>User Name</label>
            <input type='text' name='client_id' placeholder='UserName' onChange={e => setClient_id(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label htmlFor='name'>Full Names</label>
            <input type='text' name='name' placeholder='Name' onChange={e => setName(e.target.value)}/>
            
        </div>
        <div className='form-group'>
            <label htmlFor='address'>Address</label>
            <input type='text' name='address' placeholder='Address' onChange={e => setAddress(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label htmlFor='phonenmb'>Phone Number</label>
            <input type='text' name='phonenmb' placeholder='Phone Number' onChange={e => setPhonenmb(e.target.value)}/>
            
        </div>
        <div className='form-group'>
            <label htmlFor='location'>General Location</label>
            <input type='text' name='location' placeholder='Location' onChange={e => setLocation(e.target.value)}/>
            
        </div>
        <div>
        <button type="submit">Add Client</button>
        </div>
            </form>
            </div>
            <DashFoot/>
        </div>)
}

export default Client;
