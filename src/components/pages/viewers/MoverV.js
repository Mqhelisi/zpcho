import React, {useState, useEffect} from 'react'
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator";
import {Modal, Button} from "react-bootstrap";
import './Paginator.css';

function MoverV(props) {
    const { stats, heading } = props;

    
    const [players, stplayers] = useState([]);
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const  [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        useEffect(()=>{
            fetch("http://localhost:5000/moverr/" + stats).then(
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
    {dataField: "mover_id", sort: true, text: "Mover ID"},
    {dataField: "name", sort: true, text: "Name"},
    // {dataField: "date", sort: true, text: "Input Date"},
    // {dataField: "delivDate", sort: true, text: "Date of Delivery"},
    {dataField: "address", sort: true, text: "Address"},
    {dataField: "contact", sort: true, text: "Contact"},
    // {dataField: "status", sort: true, text: "Package Status"},

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

        <h3 align='center'>Movers List</h3>
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

export default MoverV;
