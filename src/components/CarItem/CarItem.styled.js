import styled from 'styled-components';

export const WrapperCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 426px;
  border-radius: 4px;
`;

export const WrapperIcon = styled.div`
  position: absolute;
  top: ${props => (props.offset ? props.offset : '0')};
  right: ${props => (props.offset ? props.offset : '0')};
  user-select: none;
  cursor: pointer;
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: ${props => (props.height ? props.height : '100%')};
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
  background: linear-gradient(
    to bottom,
    var(--dark-text-color),
    rgba(18, 20, 23, 0) 50%
  );
`;