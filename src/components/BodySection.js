import React from 'react';
import DeliveryV from './pages/viewers/DeliveryV';
import OrderV from './pages/viewers/OrderV';
import {Button} from './Button';
import './Bodysection.css';


function BodySection(props) {
  console.log(props.movers)
  return <div>

        <div className='hero-container'>

        <h2> Delivery Management Software</h2>
        <p>Under construction...</p>

        <div className='hero-btn2'>

<Button className='btn2' buttonStyle = 'btn--outline'
    buttonSize='btn--small' linkto='/clientele'>New Client</Button>

<Button className='btn2' buttonStyle = 'btn--outline'
            buttonSize='btn--small' linkto='/moverr'>New Mover</Button>

<Button className='btn2' buttonStyle = 'btn--outline'
            buttonSize='btn--small' linkto='/odr'>New Order</Button>

<Button className='btn2' buttonStyle = 'btn--outline'
    buttonSize='btn--small' linkto='/delivs'>New Delivery</Button>


</div>

        </div>
        <div className='hero-cont3'>
        <DeliveryV  stats='pending' heading='Pending Deliveries' ></DeliveryV>
        </div>
        <div className='hero-cont4'>
        <OrderV movers = {props.movers} status='pending' heading='Pending Orders'></OrderV>
      </div>
        <div className='hero-container2'>

        <div className='hero-btns'>

        <Button className='btns' buttonStyle = 'btn--outline'
            buttonSize='btn--large' linkto='/clients'>View All Clients</Button>

        <Button className='btns' buttonStyle = 'btn--outline'
                    buttonSize='btn--large' linkto='/movers'>View All Movers</Button>

        <Button className='btns' buttonStyle = 'btn--outline'
                    buttonSize='btn--large' linkto='/order'>View All Orders</Button>
        
        <Button className='btns' buttonStyle = 'btn--outline'
            buttonSize='btn--large' linkto='/delivss'>View All Deliveries</Button>
        

        </div>

        </div>

  </div>;
}

export default BodySection;
