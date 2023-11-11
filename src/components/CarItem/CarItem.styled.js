import styled from 'styled-components';

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 426px;
  border-radius: 4px;  
`;

export const WrapperIcon = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  user-select: none;
  cursor: pointer;
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
`;

export const StyleImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #121417, rgba(18, 20, 23, 0) 50%);
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
