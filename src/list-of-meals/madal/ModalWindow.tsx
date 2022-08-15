import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import style from './modal.module.css';

const modalRootElement = document.querySelector('#modal') as HTMLElement;

interface ModalProps {
  children?: ReactNode;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

const ModalWindow = ({ children, onClose }: ModalProps) => {
  const element = useRef(document.createElement('div'));

  useEffect(() => {
    const current = element.current;

    modalRootElement!.appendChild(current);

    return () => void modalRootElement!.removeChild(current);
  }, []);

  return createPortal(
    <div className={style.modal_background} onClick={onClose}>
      <div className={style.modal_window}>{children}</div>
    </div>,
    element.current
  );
};

export default ModalWindow;
