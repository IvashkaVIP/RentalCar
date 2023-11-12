import { useSelector } from 'react-redux';
import { getAllCars, getFavoriteCarsId, getError } from 'redux/Cars/carsSelectors';
import { CarsList } from '../../components';

export const Favorites = () => {
  const isError = useSelector(getError);
  const allCars = useSelector(getAllCars);
    const favoriteCarsId = useSelector(getFavoriteCarsId);
    const favoriteCars = allCars.filter(item => favoriteCarsId.includes(item._id));
  return (
    <main>
      <CarsList cars={favoriteCars} />
      {isError && <h1 style={{ textAlign: 'center' }}>Favorites page</h1>}
    </main>
  );
};
