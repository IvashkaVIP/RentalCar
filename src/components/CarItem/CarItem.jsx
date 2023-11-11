import PropTypes from 'prop-types';
import {
  CardWrapper,
  ImageWrapper,
  StyleImage,
  LearnMoreButton,
  WrapperMainBlock,
} from './CarItem.styled';
import { TitleText, DescriptionText } from '../../components';

export const CarItem = ({ car}) => {
  const { make, img, photoLink } = car;

  return (
    <CardWrapper>
      <WrapperMainBlock>
        <ImageWrapper>
          <StyleImage src={img || photoLink} alt={make} />
        </ImageWrapper>
        <TitleText car={car} />
        <DescriptionText car={car} />
      </WrapperMainBlock>
      <LearnMoreButton>Learn More</LearnMoreButton>
    </CardWrapper>
  );
};

CarItem.propTypes = {
  car: PropTypes.shape({
    make: PropTypes.string.isRequired,
    img: PropTypes.string,
    photoLink: PropTypes.string,
  }).isRequired,
};
