import { WrapperLoadMore, LoadMoreBtn } from './LoadMore.styled';

export const LoadMoreButton = ({ onClick }) => (
  <WrapperLoadMore>
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
    ;
  </WrapperLoadMore>
);
