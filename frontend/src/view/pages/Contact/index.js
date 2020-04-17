import React, { Fragment, useState, useCallback, useEffect, useRef }  from "react";
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux';

import { createMessage } from '../../../store/actions/messageActions'
import SubHeader from '../../components/SubHeader';
import IMAGES from "../../../resources/images";
import ModalPortal from '../../components/ModalPortal';
import SuccessPopUp from '../../components/SuccessPopUp';
import FailedPopUp from "../../components/FailedPopUp";

const ASSETS = {
  mainText: 'Do you have a question?',
  additionText: 'Contact us'
}

const SimpleInput = ({ name, validate, type, label }) => (
  <Field { ...{ name, validate }}>
    {({ input, meta: { error, touched } }) => (
      <div>
        <label>{label}</label>
        <input className={ error && touched ? 'simpleInput error' : 'simpleInput'} {...{ ...input, type }} />
      </div>
    )}
  </Field>
);

const TextAreaInput = ({ name, validate, type, label }) => (
  <Field { ...{ name, validate }}>
    {({ input, meta: { error, touched } }) => (
      <div>
        <label>{label}</label>
        <textarea className={ error && touched ? 'textArea error' : 'textArea'} {...{ ...input, type }} />
      </div>
    )}
  </Field>
);

const ModalWrapp = ({ error, onClose, onSubmit }) => (
  error ? <FailedPopUp {...{ error, onClose }}/> : <SuccessPopUp {...{ onSubmit, onClose }}/>
);

const Contact = ({ fetching, error, history, createMessage }) => {
  console.log( fetching, error, history)
  const prevFetching = useRef(fetching),
        [ showModal, setShowModal ] = useState(false),
        closeModal = useCallback(() => setShowModal(false), []),
        required = useCallback( value => !value, []),
        onSubmit = useCallback(values => {
          console.log("WHAT?????", values)
          createMessage(values)}, []),
        goToActicles = useCallback(() => {
          closeModal();
          history.push('/acticles')
        }, [])

  useEffect(() => {
    prevFetching.current && !fetching && setShowModal(true);
    prevFetching.current = fetching;
  })

  return (
    <Fragment>
      <div className="pageWrapper">
        <SubHeader { ...{ mainText: ASSETS.mainText, additionText: ASSETS.additionText }} />
        <div className='card'>
          <div className='leftSide'>
            <img src={IMAGES.contactCard} />
          </div>
          <div className='rightSide'>
            <Form onSubmit={onSubmit} render={({ handleSubmit, submitting, pristine, hasValidationErrors }) =>(
              <form onSubmit={handleSubmit}>
                <SimpleInput { ...{  name: "firstName", validate: required, type: "text", label: "First Name *" } }/>
                <SimpleInput { ...{  name: "lastName", validate: required, type: "text", label: "Last Name *" } }/>
                <div className='doubleFields'>
                  <div className='itemWrap'>
                    <SimpleInput { ...{  name: "email", validate: required, type: "text", label: "Email *" } }/>
                  </div>
                  <div className='devider'/>
                  <div className='itemWrap'>
                    <label>Phone</label>
                    <Field className='simpleInput' name="phone" component="input" type="text"/>
                  </div>
                </div>
                <SimpleInput { ...{  name: "object", validate: required, type: "text", label: "Object *" } }/>
                <TextAreaInput { ...{  name: "message", validate: required, type: "text", label: "Message *" } }/>
                <button type="submit" disabled={submitting || pristine || hasValidationErrors}>SEND</button>
              </form>
            )}/>
          </div>
        </div>
      </div>
      { showModal &&
        <ModalPortal>
          <ModalWrapp { ...{ error, onClose: closeModal, onSubmit: goToActicles } }/>
        </ModalPortal>
      }
    </Fragment>
  )
};

const mapStateToProps = ({ message: { fetching, error } }) => ({ fetching, error });

export default connect(mapStateToProps, { createMessage })(Contact);
