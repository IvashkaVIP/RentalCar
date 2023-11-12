import { useSelector } from 'react-redux';
import { carsSelectors } from 'redux/Cars/carsSelectors';
import { CarsList } from '../../components';

export const Favorites = () => {
  const isError = useSelector(carsSelectors.getError);
  const allCars = useSelector(carsSelectors.getAllCars);
  const favoriteCarsId = useSelector(carsSelectors.getFavoriteCarsId);
  const favoriteCars = allCars.filter(item =>
    favoriteCarsId.includes(item._id)
  );
  return (
    <main>
      {isError ? (
        <h1 style={{ textAlign: 'center' }}>
        something went wrong</h1>
      ) :
        !favoriteCarsId.length ? (
        <h1 style={{ textAlign: 'center' }}>
          there are no selected cars in your list
        </h1>
      ) : (
        <CarsList cars={favoriteCars} />
      )}
    </main>
  );
};
