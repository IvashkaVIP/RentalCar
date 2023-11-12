import { useSelector } from 'react-redux';
import { getAllCars } from 'redux/Cars/carsSelectors';
import { CarsList } from '../../components';


export const Catalog = () => {
  const cars=useSelector(getAllCars)
  return (
    <>
      <CarsList cars={cars} />
    </>
  );
};
