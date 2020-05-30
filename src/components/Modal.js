import React from "react";
import ReactDOM from "react-dom";

//This js is used to create a modal (background is faded and a dialog box alone is visible.
//). This portal is created in order to make a child , a child of some other parent (body in this case)
// This makes the styling easy.
const Modal = (props) => {
  return ReactDOM.createPortal(
    //history.push because when user clicks out of this dialog box then it will be redirected to home page.
    <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
      {/* When the user clicks inside of the window also , it might get redirected to home page if we do not stop stopPropagation.
        This is javascript thingy. */}
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active'
      >
        <div className='header'>{props.title}</div>
        <div className='content'>{props.content}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
