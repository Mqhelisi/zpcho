import React from 'react'
import '../../../App.css'
import OrderV from './OrderV'
import DashFoot from '../../DashFoot'

function OrderP() {


    return(
        <>
        <OrderV status='all' heading='All Orders'/>
        <DashFoot/>

        </>

    )

}

export default OrderP;