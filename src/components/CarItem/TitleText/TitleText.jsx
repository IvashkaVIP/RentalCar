import PropTypes from "prop-types";
import { MainText, AccentText, WrapperMainText } from "../TitleText/TitleText.styled";

export const TitleText = ({ car, price=true, fontSize="16px" }) => {
  const { make, model,year, rentalPrice } = car;

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

TitleText.propTypes = {
  car: PropTypes.shape({
    make: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
  }).isRequired,
};
