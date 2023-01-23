import React, {useState, useEffect} from 'react'
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator";
import {Modal, Button} from "react-bootstrap";
import './Paginator.css';

function ClientV() {
  
    const [players, stplayers] = useState([]);
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const  [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        useEffect(()=>{
            fetch("http://localhost:5000/clients").then(
                res => res.json()
            ).then(
                data=> {
                    stplayers(data)
                    console.log(data)
                }
            )
        },[])
    

// SET COLUMNS FOR SPECIFIC VALUES!!!!!!!!!!!!!!!!!!!
const columns =[
    {dataField: "client_id", sort: true, text: "Client ID"},
    {dataField: "name", sort: true, text: "Client Name"},
    {dataField: "joindate", sort: true, text: "Join Date"},
    // {dataField: "delivDate", sort: true, text: "Date of Delivery"},
    // {dataField: "client", sort: true, text: "Client Name"},
    {dataField: "contact", sort: true, text: "Route Taken"},
    {dataField: "location", sort: true, text: "Location"},

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
                <Modal.Title>{modalInfo.client_id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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

        <h3 align='center'>Client List</h3>
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

export default ClientV;
