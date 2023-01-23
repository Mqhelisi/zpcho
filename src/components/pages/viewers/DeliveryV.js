import React, {useState, useEffect} from 'react'
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator";
import {Modal, Button} from "react-bootstrap";
import './Paginator.css';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


async function UpdateDeliv(status, id) {
    fetch('http://localhost:5000/deliva',{
      method: 'PUT',
      body:JSON.stringify({
          id:id,
        status:status
      }),
      headers:{
          "Content-type": "application/json; charset=UTF-8"
      }
  }).then(response => response.json())
  .then(message => {
      alert(message)
  })
   }

function DeliveryV(status) {
  const { stats, heading } = status;
    const [vals,setVals] = useState('');
    const [players, stplayers] = useState([]);
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const  [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log(status.stats)

    
    useEffect(()=>{
        fetch("http://localhost:5000/delivery/" + status.stats).then(
            res => res.json()
        ).then(
            data=> {
                stplayers(data)
                console.log(data)
            }
        )
    },[])
    

// SET COLUMNS FOR SPECIFIC VALUES!!!!!!!!!!!!!!!!!
const columns =[
    {dataField: "id", sort: true, text: "Delivery"},
    // {dataField: "mover", sort: true, text: "Address"},
    {dataField: "order_id", sort: true, text: "Order ID"},
    {dataField: "delivtime", sort: true, text: "TIme of Delivery"},
    {dataField: "mover", sort: true, text: "Mover Name"},
    {dataField: "status", sort: true, text: "Package Status"},

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
    // setVals(modalInfo.comment)
    const handleSelect=(e)=>{
        setVals(e);
        console.log(vals);

      }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delivery For: {modalInfo.order_id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Update Status of Delivery</h5>
                <DropdownButton
        as={ButtonGroup}
        key='primary'
        id={`dropdown-variants-primary`}
        variant='primary'
        title='Status List'
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="To Buy">To Buy</Dropdown.Item>
        <Dropdown.Item eventKey="Bought, En Route">Bought, En Route</Dropdown.Item>
        <Dropdown.Item eventKey="Awaiting Delivery" active>
          Awaiting Delivery
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="Delivered">Delivered</Dropdown.Item>
      </DropdownButton>
      <p>Set Status to: {vals}</p>
                <Button onClick={() => UpdateDeliv(vals, modalInfo.id)}>Update Delivery</Button>
                <Button variant='danger' onClick={() => UpdateDeliv('canceled', modalInfo.id)}>Cancel Order</Button>
                {/* <h4>Invoice: {modalInfo.Invoice}</h4>
                <h4>Salesperson: {modalInfo.Salesperson}</h4>
                <h4>Tax: {modalInfo.Tax}</h4>
                <h4>Pay Status: {modalInfo.Status}</h4>
                <h4>Date: {modalInfo.Date}</h4>

                <h2>Amount: {modalInfo.Amount}</h2> */}

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
        <div className='pagin'>
        <div className='spacer'>

        <h2 align='center' margin-bottom='4px'>{heading} ({players.length})</h2>
        <BootstrapTable class="table table-dark"
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

export default DeliveryV;
