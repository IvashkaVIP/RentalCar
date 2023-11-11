import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, ContainerModal, WrapperIcon, ContainerImage } from '../Modal/Modal.styled';
import { ReactComponent as CloseIcon } from '../Svg/x.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      closeModal();
    }
  };
  return createPortal(
    <>
      <Overlay onClick={handleBackdropClick}>
        <ContainerModal>
          <WrapperIcon>
            <CloseIcon onClick={closeModal} />
          </WrapperIcon>
          <ContainerImage />
        </ContainerModal>
      </Overlay>
    </>,
    modalRoot
  );
};
