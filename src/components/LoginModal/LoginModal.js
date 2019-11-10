import React, { useEffect } from "react";
import Modal from "../Modal/myModal";

import "./loginModal.css";

const LoginModal = props => {
  useEffect(() => {
    console.log("login");
  });
  return (
    <Modal>
      <div className="my-modal">
        <div className="login-box">
          <div>Please login</div>
          <button className="login-button" onClick={props.closeModal}>
            Login
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
