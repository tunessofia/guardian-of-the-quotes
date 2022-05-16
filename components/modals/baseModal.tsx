import React from "react";

export const Modal = ({ show, children }) => {
    if(!show){
      return <React.Fragment></React.Fragment>
    }
  
    return (
      <div>
        <section className="modal-main">
          {children}
        </section>
      </div>
    );
  };