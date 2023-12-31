import { useDispatch, useSelector } from 'react-redux';
import { carsSelectors } from 'redux/Cars/carsSelectors';
import {
  addFavorite,
  deleteFavorite,
} from '../../redux/Cars/carsOperations';
import {
  WrapperCard,
  WrapperIcon,
  WrapperImage,
  StyleImage,
  GradientOverlay,  
} from './CarItem.styled';
import {LearnMoreButton} from '../Buttons/LearnMoreButton/LearnMoreButton.styled'
import { TitleText, DescriptionText } from '../../components';
import { ReactComponent as NormalHeartIcon } from '../../assets/Svg/normalHeart.svg';
import { ReactComponent as FavoriteHeartIcon } from '../../assets/Svg/activeHeart.svg';

export const CarItem = ({ car, openModal }) => {
  const { id, make, img, photoLink } = car;
  const favoriteCars = useSelector(carsSelectors.getFavoriteCars);
  const dispatch = useDispatch();

  const isFavoriteCar = () => favoriteCars.some(car => car.id === id);

  const toggleHeart = () => {
    if (isFavoriteCar()) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  const onClickLearnMore = () => openModal(id);

  return (
    <WrapperCard>
      <>
        <WrapperImage height={'268px'}>
          <StyleImage src={img || photoLink} alt={make} />
          <GradientOverlay />
          <WrapperIcon offset={'14px'} onClick={toggleHeart}>
            {isFavoriteCar() ? <FavoriteHeartIcon /> : <NormalHeartIcon />}
          </WrapperIcon>
        </WrapperImage>
        <TitleText car={car} />
        <DescriptionText car={car} />
      </>
      <LearnMoreButton onClick={onClickLearnMore}>Learn More</LearnMoreButton>
    </WrapperCard>
  );
};
