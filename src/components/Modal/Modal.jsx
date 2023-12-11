import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  Overlay,
  ContainerModal,
  // DescriptionText,
  Description,
  TitleTextBlock,
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
import { TitleText } from '../CarItem/TitleText/TitleText';
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
          <DescriptionTextList car={car} style={{ marginTop: '8px' }} />
          <Description style={{ marginTop: '14px' }}>{description}</Description>

          <TitleTextBlock style={{ marginTop: '24px' }}>
            Accessories and functionalities:
          </TitleTextBlock>
          <SupportingTextList car={car} style={{ marginTop: '8px' }} />

          <TitleTextBlock style={{ marginTop: '24px' }}>
            Rental Conditions:
          </TitleTextBlock>

          <RentalConditionalList car={car} style={{ marginTop: '8px' }} />

        </ContainerModal>
      </Overlay>
    </>,
    modalRoot
  );
};

export const RentalConditionalList = ({ car, style }) => {
  const {
    rentalPrice,
    rentalConditions,
    mileage } = car;
  
  
  console.log(rentalPrice)
  console.log(rentalConditions);
  console.log(mileage);

  return <>
  
  </>

}


export const DescriptionTextList = ({ car, style }) => {
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
    <div style={style}>
      <WrapperText>
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
      <WrapperText style={{ marginTop: '4px' }}>
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
    </div>
  );
};

export const SupportingTextList = ({ car, style }) => {
  const { accessories, functionalities } = car;

  return (
    <div style={style}>
      <WrapperText>
        {accessories.map(accessori => (
          <>
            {accessori}
            <Separator />
          </>
        ))}
        <Separator />
      </WrapperText>
      <WrapperText style={{ marginTop: '4px' }}>
        {functionalities.map(functionaliti => (
          <>
            {functionaliti}
            <Separator />
          </>
        ))}
        <Separator />
      </WrapperText>
    </div>
  );
};

const Separator = () => (
  <span style={{ color: 'rgba(18,20,23,0.1)', padding: '0 6px' }}>|</span>
);
