import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ContainerModal = styled.div`
  width: 541px;
  height: 752px;
  background-color: white;
  border-radius: 24px;
  position: relative;
  padding: 40px;
`;

export const Description = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 20px;
`;

export const TitleTextBlock = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
`;