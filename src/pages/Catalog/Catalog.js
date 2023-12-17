import { useEffect, useRef } from 'react';
import { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { carsSelectors } from 'redux/Cars/carsSelectors';
import { filtersSelectors } from 'redux/Filters/filtersSelectors';
import { fetchCars } from '../../redux/Cars/carsOperations';
import { Filters, CarsList, Error, Loader } from '../../components';
import { LoadMoreButton } from '../../components/Button/LoadMore';

const limit = 12;

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(carsSelectors.getAllCars);
  const filters = useSelector( filtersSelectors.getAllFilters);
  const isError = useSelector(carsSelectors.getError);
  const isLoading = useSelector(carsSelectors.getLoading);
  const endOfData = useSelector(carsSelectors.getEndOfData);
  const containerRef = useRef(null);

  const handlerLoadMore = () => {
    if (!endOfData) {
      dispatch(fetchCars({ page: cars.length / limit + 1, limit }));
    }
  };

  useEffect(() => {
    if (!cars.length) {
      dispatch(fetchCars({ page: 1, limit }));
    }
  }, [dispatch, cars]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [cars]);

if (filters.brand) {
  const visibleCars = cars.filter(
    car => car.make.trim().toLowerCase() === filters.brand.trim().toLowerCase()
  );
  console.log(visibleCars);
}
  return (
    <main ref={containerRef} style={{ paddingBottom: '150px' }}>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <Filters/>
          <CarsList cars={cars} />
          {!endOfData && <LoadMoreButton onClick={handlerLoadMore} />}
        </>
      )}
    </main>
  );
};
