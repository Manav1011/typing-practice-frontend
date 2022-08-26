import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Helmet} from 'react-helmet';    


{/* <div className={`modal fade WPMMODAL container-fluid`}  id="WPMmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className={`modal-content WPMMODAL border ${Theme =='Light'? 'text-dark border-dark' : 'text-light border-light'}`}>
      <div className="modal-header mt-3 mx-auto">
        <h5 className="modal-title fs-4">Congratulations!!</h5>        
      </div>
      <div className="modal-body text-center fw-semibold">
        Speed: {WPM} Words Per Minute
        <br/>
        Correct Words: {CorrectWords}
        <br/>
        Wrong Words: {WrongWords}
      </div>
      <div className="text-center mb-3">      
      <button type="button" className="btn btn-secondary d-none" id="DismisModal" data-bs-dismiss="modal">Close</button>  
        <button onClick={closeModal} data-bs-dismiss="modal" type="button" className={`btn btn-sm bg-gradient continuebtn ${Theme =='Light'? 'text-dark border-dark' : 'text-light border-light'}`} >Continue</button>
      </div>
    </div>
  </div>
</div> */}

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