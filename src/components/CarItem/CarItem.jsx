import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteCarsId } from 'redux/Cars/carsSelectors';
import {
  addFavoriteCar,
  deleteFavoriteCar,
} from '../../redux/Cars/carsOperations';
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
  const { _id, make, img, photoLink } = car;  
  const favoriteCarsId = useSelector(getFavoriteCarsId);
    const dispatch = useDispatch();
    const isFavoriteCar = () => favoriteCarsId.includes(_id);
  const toggleHeart = () => {
    if (isFavoriteCar()) {    
      dispatch(deleteFavoriteCar(_id));
    } else {
      dispatch(addFavoriteCar(_id));
    }
  };
  const onClickLearnMore = () => openModal(_id);

  return (
    <WrapperCard>
      <WrapperMainBlock>
        <WrapperImage height={'268px'}>
          <StyleImage src={img || photoLink} alt={make} />
          <GradientOverlay />
          <WrapperIcon offset={'14px'} onClick={toggleHeart}>
            {isFavoriteCar() ? (
              <FavoriteHeartIcon />
            ) : (
              <NormalHeartIcon />
            )}
          </WrapperIcon>
        </WrapperImage>
        <TitleText car={car} />
        <DescriptionText car={car} />
      </WrapperMainBlock>
      <LearnMoreButton onClick={onClickLearnMore}>Learn More</LearnMoreButton>
    </WrapperCard>
  );
};

CarItem.propTypes = {
  car: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    img: PropTypes.string,
    photoLink: PropTypes.string,
  }).isRequired,
};
