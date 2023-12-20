import { useSelector } from 'react-redux';
import { carsSelectors } from 'redux/Cars/carsSelectors';
import { CarsList, ServiceMessage } from '../../components';

export const Favorites = () => {
  const favoriteCars = useSelector(carsSelectors.getFavoriteCars);
  
  return (
    <main style={{ paddingTop: '50px' }}>
      {!favoriteCars.length ? (
        <ServiceMessage message="there are no selected cars in your list"/>
      ) : (
        <CarsList cars={favoriteCars} />
      )}
    </main>
  );
};
