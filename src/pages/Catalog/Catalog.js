import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { carsSelectors } from 'redux/Cars/carsSelectors';
import { fetchCars } from '../../redux/Cars/carsOperations';
import { CarsList, Error, Loader } from '../../components';
import { LoadMoreButton } from '../../components/Button/LoadMore.styled';
import {WrapperLoadMore} from '../Catalog/Catalog.styled'

const limit = 12;
const PAGE_KEY = 'currentPage';

export const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem(PAGE_KEY);
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const cars = useSelector(carsSelectors.getAllCars);
  const isError = useSelector(carsSelectors.getError);
  const isLoading = useSelector(carsSelectors.getLoading);
  const endOfData = useSelector(carsSelectors.getEndOfData);
  const containerRef = useRef(null);

  const handlerLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    localStorage.setItem(PAGE_KEY, nextPage.toString());    
  };

  useEffect(() => {
  if (!endOfData) {
    dispatch(fetchCars({ page: page + 1, limit }));
    }
    
if (containerRef.current && !endOfData) {
  containerRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

}, [dispatch, page, endOfData]);

  return (
    <div ref={containerRef} style={{ paddingBottom: '150px' }}>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <CarsList cars={cars} />
          {!endOfData && (
            <WrapperLoadMore>
              <LoadMoreButton onClick={handlerLoadMore}>
                Load more
              </LoadMoreButton>
            </WrapperLoadMore>
          )}
        </>
      )}
    </div>
  );
};
