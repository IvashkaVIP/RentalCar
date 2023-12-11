import {
  MainText,
  AccentText,
  WrapperMainText,
} from '../TitleText/TitleText.styled';

export const TitleText = ({ car, price = true, fontSize = '16px' }) => {
  const { make, model, year, rentalPrice } = car;

  return (
    <>
      <WrapperMainText>
        <MainText fontSize={fontSize}>
          {make} <AccentText>{model}</AccentText>, {year}
        </MainText>
        {price && <MainText>{rentalPrice}</MainText>}
      </WrapperMainText>
    </>
  );
};
