import React from "react"
import FontAwesome from 'react-fontawesome'

const ASSETS = {
    mainText: "Error!",
    additionText: "Try later!",
    buttonText: "Close"
};

const FailedPopUp = ({ onClose, error }) => (
  <div className='modalWrapp' onClick={onClose}>
      <div className='modalError'>
          <FontAwesome className='modalClose' name='times-circle' onClick={onClose} />
          <h1>{ASSETS.mainText}</h1>
          <h3>{error}</h3>
          <button onClick={onClose}>{ASSETS.buttonText}</button>
      </div>
  </div>
)


export default FailedPopUp
