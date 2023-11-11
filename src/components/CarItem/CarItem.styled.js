import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 426px;
  border-radius: 4px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`;

export const StyleImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const WrapperMainBlock = styled.div``;

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
  &:hover {
    background-color: var(--hover-button-color);
  }
`;
