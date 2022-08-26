import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Helmet} from 'react-helmet';    



const ResultModal = (props) => {
  return (    
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className='WPMMODAL  text-center '
        >
              <Helmet>                
                <style>{`.WPMMODAL{${props.themebackground}}`}</style>
            </Helmet>
          <Modal.Header closeButton className={`WPMMODAL border ${props.theme =='Light'? 'text-dark border-dark' : 'text-light border-light'}`}>
            <Modal.Title id="contained-modal-title-vcenter">
              Congratulations!!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={`WPMMODAL border ${props.theme =='Light'? 'text-dark border-dark' : 'text-light border-light'}`}>
            <h4>Your Score</h4>
                    <p>
                Speed: {props.wpm} Words Per Minute
                <br/>
                Accuracy: {props.accuracy}%
                <br/>
                Correct Words: {props.correctwords}
                <br/>
                Wrong Words: {props.wrongwords}
            </p>
            <button onClick={props.closemodal} data-bs-dismiss="modal" type="button" className={`btn btn-sm bg-gradient continuebtn ${props.theme =='Light'? 'text-dark border-dark' : 'text-light border-light'}`} >Continue</button>      
          </Modal.Body>                   
        </Modal>
      );
}

export default ResultModal