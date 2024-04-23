import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import SignupModals from '../../modals/SignupModals';
import SigninModals from '../../modals/SigninModal';

function OffCanvas() {
  const [show, setShow] = useState(false);

  const token = localStorage.getItem("token");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {token ? (
          <div>
            <ul className="list d-flex gap-2 list-unstyled">
              <Link className="text-decoration-none text-black" to="">
                <li>Stories</li>
              </Link>
              <Link className="text-decoration-none text-black" to="">
                <li>Contact</li>
              </Link>
            </ul>
            <img src={profilePic} alt="" />
          </div>
        ) : (
          <div className='d-flex align-items-center'>
            <ul className="list mt-4 list-unstyled">
              <Link className="text-decoration-none text-black" to="/signin">
                <li>Stories</li>
              </Link>
              <Link className="text-decoration-none text-black" to="/signin">
                <li>Contact</li>
              </Link>
              <SigninModals/>
             <div>
             <SignupModals/>
             </div>
            </ul>
          </div>
        )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;