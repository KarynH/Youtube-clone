import React from "react"
export default function ModalError() {
  return(
    <div className="ModalBackground">
        <div className="ModalContainer">
          <button>x</button>
          <div className="Title">
            <h1>Are you sure you want to continue ?</h1>
            <div className="Body"> 
            <p> Happy Browsing</p>
            </div>
          </div>
        </div>
    </div>
  )
}
