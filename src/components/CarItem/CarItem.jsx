import { useDispatch, useSelector } from 'react-redux';
import { carsSelectors } from 'redux/Cars/carsSelectors';
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
import { ReactComponent as NormalHeartIcon } from '../Resources/Svg/normalHeart.svg';
import { ReactComponent as FavoriteHeartIcon } from '../Resources/Svg/activeHeart.svg';

export const CarItem = ({ car, openModal }) => {
  const { id, make, img, photoLink } = car;
  const favoriteCarsId = useSelector(carsSelectors.getFavoriteCarsId);
  const dispatch = useDispatch();
  const isFavoriteCar = () => favoriteCarsId.includes(id);
  const toggleHeart = () => {
    if (isFavoriteCar()) {
      dispatch(deleteFavoriteCar(id));
    } else {
      dispatch(addFavoriteCar(id));
    }
  };
  const onClickLearnMore = () => openModal(id);

  return (
    <WrapperCard>
      <WrapperMainBlock>
        <WrapperImage height={'268px'}>
          <StyleImage src={img || photoLink} alt={make} />
          <GradientOverlay />
          <WrapperIcon offset={'14px'} onClick={toggleHeart}>
            {isFavoriteCar() ? <FavoriteHeartIcon /> : <NormalHeartIcon />}
          </WrapperIcon>
        </WrapperImage>
        <TitleText car={car} />
        <DescriptionText car={car} />
      </WrapperMainBlock>
      <LearnMoreButton onClick={onClickLearnMore}>Learn More</LearnMoreButton>
    </WrapperCard>
  );
};
