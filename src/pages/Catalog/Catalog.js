import { CarsList } from '../../components';
import { getCars } from '../../fakeAPI';

export const Catalog = () => {
  const cars = getCars();
  return (
    <>
      <CarsList cars={cars} />
    </>
  );
};
