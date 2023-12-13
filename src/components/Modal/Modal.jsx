import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  Overlay,
  ContainerModal,  
  Description,
  TitleTextBlock,
  RentalCondition,
  RentalCarButton,
} from '../Modal/Modal.styled';
import {
  WrapperIcon,
  WrapperImage,
  StyleImage,
} from '../CarItem/CarItem.styled';
import { TitleText } from '../CarItem/TitleText/TitleText';
import { WrapperText } from '../CarItem/DescriptionText/DescriptionText.styled';
import { ReactComponent as CloseIcon } from '../Svg/x.svg';
import { AccentText } from 'components/CarItem/TitleText/TitleText.styled';

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
            <Description style={{ marginTop: '14px' }}>
              {description}
            </Description>

            <TitleTextBlock style={{ marginTop: '24px' }}>
              Accessories and functionalities:
            </TitleTextBlock>
            <SupportingTextList car={car} style={{ marginTop: '8px' }} />

            <TitleTextBlock style={{ marginTop: '24px' }}>
              Rental Conditions:
            </TitleTextBlock>

            <RentalConditionalList car={car} style={{ marginTop: '8px' }} />          

          <RentalCarButton href="tel:+380730000000">Rental car</RentalCarButton>
        </ContainerModal>
      </Overlay>
    </>,
    modalRoot
  );
};

export const RentalConditionalList = ({ car, style }) => {
  const { rentalPrice, rentalConditions, mileage } = car;

  const price = rentalPrice.replace('$', '') + `$`;
  const rentalConditionsArray = rentalConditions
    .split(`\n`)
    .filter(item => !item.includes('Minimum age:'));
  const minAge = rentalConditions.match(/Minimum age: (\d+)/)[1];

  return (
    <>      
      <div style={{ marginTop: '8px' }}>
        {minAge && (
          <RentalCondition style={{ marginRight: '8px' }}>
            Minimum age: <AccentText>{minAge}</AccentText>
          </RentalCondition>
        )}
        {rentalConditionsArray[0] && (
          <RentalCondition>{rentalConditionsArray[0]}</RentalCondition>
        )}
      </div>
      <div style={{ marginTop: '8px' }}>
        {rentalConditionsArray[1] && (
          <RentalCondition style={{ marginRight: '8px' }}>
            {rentalConditionsArray[1]}
          </RentalCondition>
        )}
        <RentalCondition style={{ marginRight: '8px' }}>
          Mileage: <AccentText>{mileage.toLocaleString('en-US')}</AccentText>
        </RentalCondition>
        <RentalCondition>
          Price: <AccentText>{price}</AccentText>
        </RentalCondition>        
      </div>
    </>
  );
};

export const DescriptionTextList = ({ car, style }) => {
  const { id, type, year, address, fuelConsumption, engineSize } = car;

  const getCity = () => address.split(`, `)[1];
  const getCountry = () => address.split(`, `)[2];
  const formatingType = () =>
    type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

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
      </WrapperText>
      <WrapperText style={{ marginTop: '4px' }}>
        Fuel Consumption: {fuelConsumption}
        <Separator />
        Engine Size: {engineSize}
        <Separator />
      </WrapperText>
    </div>
  );
};

export const SupportingTextList = ({ car, style }) => {
  const { accessories, functionalities } = car;

  return (
    <div style={style}>
      <WrapperText>
        {accessories.map(accessory => (
          <>
            {accessory}
            <Separator />
          </>
        ))}
        <Separator />
      </WrapperText>
      <WrapperText style={{ marginTop: '4px' }}>
        {functionalities.map(functionality => (
          <>
            {functionality}
            <Separator />
          </>
        ))}
        <Separator />
      </WrapperText>
    </div>
  );
};

const Separator = () => (
  <span style={{ color: 'var(--decoration-color)', padding: '0 6px' }}>|</span>
);
