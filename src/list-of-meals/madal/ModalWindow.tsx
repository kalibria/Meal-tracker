import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import style from './modal.module.css';

const modalRootElement = document.querySelector('#modal') as HTMLElement;

interface ModalProps {
  children?: ReactNode;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  showModal: boolean;
}

const ModalWindow = ({ children, onClose, showModal }: ModalProps) => {
  const element = useRef(document.createElement('div'));

  useEffect(() => {
    if (showModal) {
      const current = element.current;

      modalRootElement!.appendChild(current);

      return () => void modalRootElement!.removeChild(current);
    }
  }, [showModal]);

  if (showModal) {
    return createPortal(
      <div className={style.modal_background}>
        <button className={style.modal_btn} onClick={onClose}>
          <img
            className={style.modal_close_icon}
            src={
              'https://icon-library.com/images/svg-close-icon/svg-close-icon-4.jpg'
            }
          />
        </button>
        <div className={style.modal_window}>{children}</div>
      </div>,
      element.current
    );
  }
  return null;
};

export default ModalWindow;
