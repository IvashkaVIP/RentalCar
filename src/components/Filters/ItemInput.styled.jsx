import styled from 'styled-components';

export const ContainerInput = styled.div`
  background-color: #ff9306;
  /* display: flex; */

  position: relative;
  margin-right: 18px;
  width: ${props => props.width};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  position: relative;
  margin-right: 18px;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--grey-text-color);
`;

export const WrapperInputField = styled.div`
  position: relative;
  background-color: brown;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 18px;
  border-radius: 14px;
  border: none;
  background-color: var(--background-second-grey-color);
  &::placeholder {
    font-family: 'Manrope', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    color: var(--dark-text-color);
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 79px;
  width: 224px;
  height: ${({ $isOpen }) => ($isOpen ? '272px' : '0')};
  padding: ${({ $isOpen }) => ($isOpen ? '14px 8px' : '0')};
  border: ${({ $isOpen }) =>
  $isOpen ? '1px solid var(--super-light-grey-text-color)' : '0'};
  border-radius: 14px;
  background-color: white;
  z-index: 1;
  overflow: hidden;
  transition: height 0.3s ease-in-out, padding 0.3s ease-in-out;
`;

export const DropDownList = styled.ul`
  color: var(--middle-light-grey-text-color);
  max-height: 100%;
  overflow: auto;

  scrollbar-width: 8px;
  scrollbar-color: var(--middle-light-grey-text-color) white;

  &::-webkit-scrollbar {
    width: 8px;
    scroll-behavior: smooth;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--middle-light-grey-text-color);
    border-radius: 14px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

export const ItemDropDownList = styled.li`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: var(--middle-light-grey-text-color);
  &:first-child {
    text-align: center;
  }
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:hover {
    color: var(--dark-text-color);
    cursor: pointer;
  }
`;

export const ToggleChevron = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%) scaleY(${props => (props.$isOpen ? '1' : '-1')});
  transition: transform 0.3s ease-in-out;
`;
