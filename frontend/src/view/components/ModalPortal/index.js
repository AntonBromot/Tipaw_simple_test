import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById( 'modal' );

const ModalPortal = ({ children }) => {
  const element = useRef(document.createElement( 'div' ))

  useEffect(() => {
    modalRoot.appendChild(element.current);
    return () => modalRoot.removeChild(element.current);
  }, []);

  return createPortal(children, element.current);
};

export default ModalPortal;
