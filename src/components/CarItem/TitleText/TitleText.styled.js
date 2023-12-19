import styled from 'styled-components';

export const WrapperMainText = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
`;

export const MainText = styled.p`
  font-size: ${props => (props.fontSize ? props.fontSize : '16px')};
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0;
`;

export const AccentText = styled.span`
  font-weight: 600;
  color: var(--accent-text-color);
`;
