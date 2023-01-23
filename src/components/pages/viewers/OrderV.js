import React, {useState, useEffect} from 'react'
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator";
import {Modal, Button} from "react-bootstrap";
import './Paginator.css';
import { Typeahead } from 'react-bootstrap-typeahead';

async function AddDeliv(orderid,moverid) {
    console.log(moverid)
    fetch('http://localhost:5000/deliva',{
      method: 'POST',
      body:JSON.stringify({
        order_id: orderid,
          mover: moverid,
      }),
      headers:{
          "Content-type": "application/json; charset=UTF-8"
      }
  }).then(response => response.json())
  .then(message => {
      alert(message)
  })
   }

function OrderV(props) {
    const [singleSelections, setSingleSelections] = useState([]);

  const {movers, status, heading } = props;
    // console.log(movers)
    const [players, stplayers] = useState([]);
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const  [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
        fetch("http://localhost:5000/ordr/" + status).then(
            res => res.json()
        ).then(
            data=> {
                stplayers(data)
                console.log(data)
            }
        )
    },[])

    


const columns =[
    {dataField: "order_id", sort: true, text: "Order Name"},
    {dataField: "client", sort: true, text: "Client"},
    {dataField: "orderdate", sort: true, text: "Order Time"},
    {dataField: "total", sort: true, text: "Total Cost"},

]

const rowEvents ={
    onClick: (e,row)=>  {
       console.log(row)
       setModalInfo(row);
       toggleTrueFalse();
    }
}
const toggleTrueFalse = () => {
    setShowModal(handleShow);
}
const ModalContent = () => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Order Code: {modalInfo.order_id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Convert to Delivery By Attaching Order to Mover</h5>
                <div className='hero-btn2'>
                    <h5>Mover:</h5>
                    <Typeahead
                    
          id="basic-typeahead-single"
          labelKey="name"
          onChange={setSingleSelections}
          options={movers}
          placeholder="Available Movers"
          selected={singleSelections}
        />
<Button size='sm' variant="primary" onClick={() => AddDeliv(modalInfo.order_id,singleSelections)}>
                    Add Delivery
                </Button>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
    return(
    <div className='pagin'  >
        <div className='spacer'>
        <h3 align='center'>{heading} ({players.length})</h3>
        <BootstrapTable
        keyField="name"
        data={players}
        columns={columns}
        pagination={paginationFactory()}
        rowEvents={rowEvents}
        />

        {show ? <ModalContent/> : null}
        </div>
        </div>

    );
    
}

export default OrderV;
