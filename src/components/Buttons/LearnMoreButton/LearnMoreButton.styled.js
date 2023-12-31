import styled from 'styled-components';

export const LearnMoreButton = styled.button`
  width: 100%;
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--light-text-color);
  background-color: var(--normal-button-color);
  border-radius: 12px;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--hover-button-color);
  }
`;
