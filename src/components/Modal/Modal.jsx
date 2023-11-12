import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {
  Overlay,
  ContainerModal,
  // DescriptionText,
  Description,
} from '../Modal/Modal.styled';
import {
  // WrapperCard,
  WrapperIcon,
  WrapperImage,
    StyleImage,
  // GradientOverlay,
  // LearnMoreButton,
  // WrapperMainBlock,
} from '../CarItem/CarItem.styled';
import { TitleText } from "../CarItem/TitleText/TitleText"
import { WrapperText } from '../CarItem/DescriptionText/DescriptionText.styled';
import { ReactComponent as CloseIcon } from '../Svg/x.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ car, closeModal }) => {
  const { img, photoLink, make, description } = car;
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
          <WrapperIcon offset={'16px'}>
            <CloseIcon onClick={closeModal} />
          </WrapperIcon>
          <WrapperImage height={'248px'}>
            <StyleImage src={img || photoLink} alt={make} />
          </WrapperImage>
          <TitleText car={car} fontSize={'18px'} price={false} />
          <DescriptionTextModal car={car} style={{marginBottom: "14px"} } />
          <Description>{description}</Description>
        </ContainerModal>
      </Overlay>
    </>,
    modalRoot
  );
};

export const DescriptionTextModal = ({ car, style }) => {
  const {
    id,
    // make,
    type,
    // model,
    year,
    // rentalPrice,
    address,
    fuelConsumption,
    // rentalCompany,
    // accessories,
    engineSize,
  } = car;

  const getCity = () => address.split(`, `)[1];
  const getCountry = () => address.split(`, `)[2];
  const formatingType = () =>
    type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  // const getMainAccessories = () => {
  //   if (
  //     accessories.find(item =>
  //       item.toLowerCase().includes('premium sound system')
  //     )
  //   )
  //     return 'Premium Sound System';
  //   if (accessories.find(item => item.toLowerCase().includes('audio system')))
  //     return 'Audio System';
  //   if (accessories.find(item => item.toLowerCase().includes('power liftgate')))
  //     return 'Power liftgate';

  //   return accessories[0];
  // };
  // console.log(getCity())

  return (
    <>
      <WrapperText style={{ marginBottom: '4px' }}>
        {getCity()}
        <Separator />
        {getCountry()}
        <Separator />
        Id: {id}
        <Separator />
        Year: {year}
        <Separator />
        Type: {formatingType()}
        {/* {rentalCompany} */}
      </WrapperText>
      <WrapperText style={style}>
        Fuel Consumption: {fuelConsumption}
        {/* {formatingType()} */}
        {/* <Separator /> */}
        {/* {model} */}
        <Separator />
        Engine Size: {engineSize}
        {/* {id} */}
        <Separator />
        {/* {getMainAccessories()} */}
      </WrapperText>
    </>
  );
};

const Separator = () => (
  <span style={{ color: 'rgba(18,20,23,0.1)', padding: '0 6px' }}>|</span>
);

DescriptionTextModal.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    accessories: PropTypes.array.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
  }).isRequired,
};



Modal.propTypes = {
  car: PropTypes.shape({
    make: PropTypes.string.isRequired,
    img: PropTypes.string,
    photoLink: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
