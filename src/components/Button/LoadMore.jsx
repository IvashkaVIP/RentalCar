import { WrapperLoadMore, LoadMoreBtn } from './LoadMore.styled';

export const LoadMoreButton = ({ onClick }) => (
  <WrapperLoadMore>
    <LoadMoreBtn onClick={onClick}>Load more</LoadMoreBtn>;
  </WrapperLoadMore>
);
