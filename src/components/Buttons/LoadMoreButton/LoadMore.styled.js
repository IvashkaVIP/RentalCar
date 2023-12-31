import styled from 'styled-components';

export const WrapperLoadMore = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
`;

export const LoadMoreBtn = styled.button`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;  
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: underline;
  color: var(--normal-button-color);
  background: none;
  border: none;
  &:hover {
    color: var(--hover-button-color);
  }
`;
