import React from "react";
import Register from "../forms/Register";
import { Modal } from "react-bootstrap";

const RegisterModal = (props) => {
  const { isShowRegisterModal, handleCloseModal, setShowLoginModal } = props;

  return (
    <Modal
      show={isShowRegisterModal}
      onHide={handleCloseModal}
      backdrop="static"
      centered
    >
      <Modal.Body>
        <Register
          handleCloseModal={handleCloseModal}
          setShowLoginModal={setShowLoginModal}
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

export default RegisterModal;
