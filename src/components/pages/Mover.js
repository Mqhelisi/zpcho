import React, { useState } from 'react';
import '../Adder.css'
import DashFoot from '../DashFoot'

async function AddMover(values) {

    fetch('https://localhost:5000/mover',{
      method: 'POST',
      body:JSON.stringify({
          mover_id: values.mover_id,
          date: values.date,
          email: values.email,
          address:values.address,
        phonenmb: values.phonenmb
      }),
      headers:{
          "Content-type": "application/json; charset=UTF-8"
      }
  }).then(response => response.json())
  .then(message => {
      console.log(message)
  })
   }

function Mover() {
    const [mover_id, setMover_id] = useState();
    const [name, setname] = useState();
    const [address, setAddress] = useState();
    const [phonenmb, setPhonenmb] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await AddMover({
            mover_id,
            name,
            address,
            phonenmb
        });
        // setToken(token);
        console.log('adssad')
      }

        return (

        <div className='form-box'>
            <div className='header'>Add A Mover to System</div>
            <div className='login-wrapper'>
                <div className='image'>
                    {/* <img src={loginImg}/> */}
                </div>
            <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor='mover_id'>mover Name</label>
                                <input type='text' name='mover_id' placeholder='mover Name' onChange={e => setMover_id(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='name'>name Address</label>
                                <input type='text' name='name' placeholder='First Names' onChange={e => setname(e.target.value)}/>
                                
                            </div>
                            <div className='form-group'>
                                <label htmlFor='address'>Address</label>
                                <input type='text' name='address' placeholder='Address' onChange={e => setAddress(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='phonenmb'>Phone Number</label>
                                <input type='text' name='phonenmb' placeholder='Phone Number' onChange={e => setPhonenmb(e.target.value)}/>
                                
                            </div>
                            <div>
                            <button type="submit">Add Client</button>
                            </div>
            </form>
            </div>
            <DashFoot/>
        </div>)
}

export default Mover;
