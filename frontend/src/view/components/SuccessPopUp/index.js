import React from "react"
import FontAwesome from 'react-fontawesome'

const ASSETS = {
    mainText: "Success!",
    additionText: "Message was send",
    buttonText: "See all messages"
};

const SuccessPopUp = ({ onClose, onSubmit }) => (
  <div className='modalWrapp' onClick={onClose}>
    <div className='modalSuccess'>
      <FontAwesome className='modalClose' name='times-circle' onClick={onClose} />
      <h1>{ASSETS.mainText}</h1>
      <h3>{ASSETS.additionText}</h3>
       <button onClick={onSubmit}>{ASSETS.buttonText}</button>
    </div>
  </div>
)


export default SuccessPopUp
