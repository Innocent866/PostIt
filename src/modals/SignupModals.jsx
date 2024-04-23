import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function SignupModals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Get Started
      </Button>

      <Modal size='lg' show={show} onHide={handleClose}>
        <div className='container text-center p-5'> 
        
          <h6 className='my-5'>Join Post<span style={{color: "#0086B0",fontSize:"20px", fontWeight:"700"}}>it</span></h6>
          <p>Enter your email address to create an account on Postit.</p>
            <form action="">
              <label htmlFor="" className='mb-3 d-block'>UserName</label>
              <input type="text" className="signup-modal-input w-75 mb-4" style={{border:"none", borderBottom:"1px solid black"}}/>
              <label htmlFor="" className='mb-3 d-block'>Your Email Address</label>
              <input type="text" className="signup-modal-input w-75 mb-4" style={{border:"none", borderBottom:"1px solid black"}}/>
              <label htmlFor="" className='mb-3 d-block'>Password</label>
              <input type="text" className="signup-modal-input w-75 mb-4" style={{border:"none", borderBottom:"1px solid black"}}/>
              <button className='btn w-75 btn-primary text-white'>Continue</button>
            </form>
            <p className='mt-4 mb-5'>Already have an account? <Link>Sign In</Link> </p>
        </div>
      </Modal>
    </>
  );
}

export default SignupModals;