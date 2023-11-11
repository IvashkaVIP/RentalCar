import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  WrapperCard,
  WrapperIcon,
  WrapperImage,
    StyleImage,
  GradientOverlay,
  LearnMoreButton,
  WrapperMainBlock,
} from './CarItem.styled';
import { TitleText, DescriptionText } from '../../components';
import { ReactComponent as NormalHeartIcon } from '../Svg/normalHeart.svg';
import { ReactComponent as FavoriteHeartIcon } from '../Svg/activeHeart.svg';

export const CarItem = ({ car, openModal }) => {
  const { make, img, photoLink } = car;
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleHeart = () => setIsFavorite(!isFavorite);

  return (
    <WrapperCard>
      <WrapperMainBlock>
        <WrapperImage>
          <StyleImage src={img || photoLink} alt={make} />
          <GradientOverlay />
          <WrapperIcon onClick={toggleHeart}>
            {isFavorite ? <FavoriteHeartIcon /> : <NormalHeartIcon />}
          </WrapperIcon>
        </WrapperImage>
        <TitleText car={car} />
        <DescriptionText car={car} />
      </WrapperMainBlock>
      <LearnMoreButton onClick={openModal}>Learn More</LearnMoreButton>
    </WrapperCard>
  );
};

CarItem.propTypes = {
  car: PropTypes.shape({
    make: PropTypes.string.isRequired,
    img: PropTypes.string,
    photoLink: PropTypes.string,
  }).isRequired,
};
