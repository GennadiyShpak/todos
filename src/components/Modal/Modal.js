import { useEffect, useRef } from 'react';

import Form from '../Form';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
  const onFirstRender = useRef(true);
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    if (onFirstRender.current === true) {
      onFirstRender.current = false;
      window.addEventListener('keydown', handleKeyDown);
      return;
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return createPortal(
    <div className="Modal__backdrop" onClick={handleBackdropClick}>
      <div className="Modal__content">
        <Form onClose={onClose} />
      </div>
    </div>,
    modalRoot,
  );
};
export default Modal;
