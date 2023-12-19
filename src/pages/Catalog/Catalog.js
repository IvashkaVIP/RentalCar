import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { carsSelectors } from 'redux/Cars/carsSelectors';
import { filtersSelectors } from 'redux/Filters/filtersSelectors';
import { fetchCars } from '../../redux/Cars/carsOperations';
import { Filters, CarsList, Error, Loader } from '../../components';
import { LoadMoreButton } from '../../components/Button/LoadMore';

const limit = 12;

export const Catalog = () => {
  const [visibleCars, setVisibleCars] = useState([]);
  const [toFetch, setToFetch] = useState(false);

  const dispatch = useDispatch();
  const cars = useSelector(carsSelectors.getAllCars);
  const filters = useSelector(filtersSelectors.getAllFilters);
  const isError = useSelector(carsSelectors.getError);
  const isLoading = useSelector(carsSelectors.getLoading);
  const endOfData = useSelector(carsSelectors.getEndOfData);
  const containerRef = useRef(null);
  const {
    brand,
    price,
    mileage: { from, to },
  } = filters;

  const handleLoadMore = () => {
    setToFetch(true);
  };

  useEffect(() => {
    if (!cars.length) dispatch(fetchCars({ page: 1, limit }));
  }, [cars.length, dispatch]);

  useEffect(() => {
    if (toFetch) {
      dispatch(fetchCars({ page: cars.length / limit + 1, limit }));
      setToFetch(false);
    }
  }, [cars.length, dispatch, toFetch]);

  useEffect(() => {
    if (!brand && !price && !from && !to) {
      setVisibleCars(cars);
    } else {
      let filteredCars = [...cars];

      if (brand)
        filteredCars = filteredCars.filter(
          car => car.make.trim().toLowerCase() === brand.trim().toLowerCase()
        );

      if (price)
        filteredCars = filteredCars.filter(
          car => parseInt(car.rentalPrice.replace('$', ''), 10) <= price
        );

      if (from || to) {
        filteredCars = filteredCars.filter(
          car => from <= car.mileage && (car.mileage <= to || !to)
        );
      }

      setVisibleCars(filteredCars);
    }
  }, [brand, price, from, to, cars]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [cars]);

  const isOffFilters = () => !brand && !price && !from && !to;
  
  return (
    <main ref={containerRef} style={{ paddingBottom: '150px' }}>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <Filters />
          {visibleCars && <CarsList cars={visibleCars} />}
          {!endOfData && isOffFilters() && (
            <LoadMoreButton onClick={handleLoadMore} />
          )}
        </>
      )}
    </main>
  );
};
