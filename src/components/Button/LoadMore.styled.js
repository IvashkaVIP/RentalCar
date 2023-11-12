import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  width: fit-content;
  height: fit-content;  
  margin-right: auto;
  margin-left: auto;
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
