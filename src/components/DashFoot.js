import React from 'react'
import {Button} from './Button';
import './Bodysection.css';

function DashFoot() {
  return (
    <div>
        
        <div className='hero-btn3'>

<Button className='btn2' buttonStyle = 'btn--outline'
    buttonSize='btn--small' linkto='/clientele'>New Client</Button>

<Button className='btn2' buttonStyle = 'btn--outline'
            buttonSize='btn--small' linkto='/moverr'>New Mover</Button>

<Button className='btn2' buttonStyle = 'btn--outline'
            buttonSize='btn--small' linkto='/odr'>New Order</Button>

<Button className='btn2' buttonStyle = 'btn--outline'
    buttonSize='btn--small' linkto='/delivs'>New Delivery</Button>


<Button className='btn2' buttonStyle = 'btn--outline'
            buttonSize='btn--small' linkto='/clients'>View All Clients</Button>

        <Button className='btn2' buttonStyle = 'btn--outline'
                    buttonSize='btn--small' linkto='/movers'>View All Movers</Button>

        <Button className='btn2' buttonStyle = 'btn--outline'
                    buttonSize='btn--small' linkto='/order'>View All Orders</Button>
        
        <Button className='btn2' buttonStyle = 'btn--outline'
            buttonSize='btn--small' linkto='/delivss'>View All Deliveries</Button>

        
<Button className='btn2' buttonStyle = 'btn--outline'
            buttonSize='btn--small' linkto='/dash'>Back to Dashboard</Button>

  
        
</div>






    </div>
  )
}

export default DashFoot