import React from "react";
import Login from "../forms/Login";
import { Modal } from "react-bootstrap";

const LoginModal = (props) => {
  const { isShowLoginModal, handleCloseModal, setShowRegisterModal } = props;

  return (
    <Modal
      show={isShowLoginModal}
      onHide={handleCloseModal}
      backdrop="static"
      centered
    >
      <Modal.Body>
        <Login
          handleCloseModal={handleCloseModal}
          setShowRegisterModal={setShowRegisterModal}
        />
      </Modal.Body>
      <Modal.Footer>
        <div className="col-4 mt-3 btn btn-dark" onClick={handleCloseModal}>
          <i className="fa-solid fa-angles-left "></i>Go Back
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
