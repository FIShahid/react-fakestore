import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./ReactModal.css"

const ReactModal = (props) => {
   const {title,image,description,price} =props.product
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <>
                <Button variant="primary" onClick={handleShow}>
                    See Details
                </Button>
                   
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                       <div className='m-auto text-center'>
                       <Modal.Title>{title}</Modal.Title>
                    <img className='w-50' src={image} alt="" />
                       </div>
                    </Modal.Header>
                    <Modal.Body>{description}</Modal.Body>
                    <p className='fw-bold text-center'>Price: {price}</p>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        </div>
    );
};

export default ReactModal;