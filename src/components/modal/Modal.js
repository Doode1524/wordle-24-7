import React from "react";
import "./modal-styles.css";

export const Modal = (props) => {

  if (!props.showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">{props.message}</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">CLOSE</button>
          <button onClick={props.onConfirm} className="button">CONTINUE</button>
        </div>
      </div>
    </div>
  );
};
