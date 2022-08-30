import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Helmet} from 'react-helmet';    



const ResultModal = (props) => {
  return (    
        <Modal
          {...props}
          size="sm"
          centered
          className='text-center'
        >
              <Helmet>                
                <style>{`.WPMMODAL {${props.themebackground}}`}</style>
            </Helmet>          
          <Modal.Body className={`WPMMODAL border rounded ${props.theme =='Light'? 'text-dark border-dark' : 'text-light border-light'}`}>
            <h4>Your Score</h4>
            <hr></hr>
                    <p>
                Speed: {props.wpm} Words Per Minute
                <hr></hr>
                
                Accuracy: {props.accuracy}%
                <hr></hr>
                Correct Words: {props.correctwords}
                <hr></hr>
                Wrong Words: {props.wrongwords}
                <hr></hr>
            </p>
            <button onClick={props.closemodal} data-bs-dismiss="modal" type="button" className={`btn btn-md bg-gradient continuebtn ${props.theme =='Light'? 'text-dark border-dark' : 'text-light border-light'}`} >Continue</button>      
          </Modal.Body>                   
        </Modal>
      );
}

export default ResultModal