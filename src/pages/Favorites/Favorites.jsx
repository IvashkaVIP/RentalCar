import { useSelector } from 'react-redux';
import { carsSelectors } from 'redux/Cars/carsSelectors';
import { CarsList, NoFavorites } from '../../components';

export const Favorites = () => {
  const allCars = useSelector(carsSelectors.getAllCars);
  const favoriteCarsId = useSelector(carsSelectors.getFavoriteCarsId);
  const favoriteCars = allCars.filter(item =>
    favoriteCarsId.includes(item.id)
  );
  return (
    <main style={{paddingTop: "50px"}}>
      {!favoriteCarsId.length ? (
        <NoFavorites />
      ) : (
        <CarsList cars={favoriteCars} />
      )}
    </main>
  );
};
