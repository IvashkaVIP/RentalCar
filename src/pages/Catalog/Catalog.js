import { useSelector } from 'react-redux';
import { carsSelectors} from 'redux/Cars/carsSelectors';
import { CarsList } from '../../components';


export const Catalog = () => {
  const cars=useSelector(carsSelectors.getAllCars)
  return (
    <>
      <CarsList cars={cars} />
    </>
  );
};
