import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { carsSelectors } from 'redux/Cars/carsSelectors';
import { filtersSelectors } from 'redux/Filters/filtersSelectors';
import { fetchCars } from '../../redux/Cars/carsOperations';
import { Filters, CarsList, Error, Loader } from '../../components';
import { LoadMoreButton } from '../../components/Button/LoadMore';
import { addBrandFilter } from 'redux/Filters/filtersSlice';

const limit = 12;

export const Catalog = () => {
  const [visibleCars, setVisibleCars] = useState([]);
  const dispatch = useDispatch();
  const cars = useSelector(carsSelectors.getAllCars);
  const filters = useSelector(filtersSelectors.getAllFilters);
  const isError = useSelector(carsSelectors.getError);
  const isLoading = useSelector(carsSelectors.getLoading);
  const endOfData = useSelector(carsSelectors.getEndOfData);
  const containerRef = useRef(null);
  const {
    brand,
    // price,
    // mileage: { from, to },
  } = filters;
 

  const handleClickSearch = (choice) => {

    dispatch(addBrandFilter(choice))
  }

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

  useEffect(() => {
    if (brand) {
      setVisibleCars(
        cars.filter(
          car => car.make.trim().toLowerCase() === brand.trim().toLowerCase()
        )
      );
    } else setVisibleCars(cars);
    
  }, [brand, cars]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [cars]);

  return (
    <main ref={containerRef} style={{ paddingBottom: '150px' }}>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <Filters handleClickSearch={handleClickSearch} />
          {visibleCars && <CarsList cars={visibleCars} />}
          {!endOfData && <LoadMoreButton onClick={handlerLoadMore} />}
        </>
      )}
    </main>
  );
};
