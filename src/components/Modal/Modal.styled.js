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
  min-height: 752px;
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
  color: var(--dark-text-color);
`;

export const RentalCondition = styled.div`
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: var(--accessories-text-color);
  background-color: var(--background-grey-color);
  border-radius: 35px;
  padding: 7px 14px;
`;

export const RentalCarButton = styled.a`
  background-color: var(--normal-button-color);
  color: #ffffff; 
  margin-top: 24px;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  border-radius: 12px;
  display: inline-block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--hover-button-color);
  }
`;