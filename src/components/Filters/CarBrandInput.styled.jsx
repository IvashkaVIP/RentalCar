import styled from 'styled-components';

export const Select = styled.select`
  margin-top: 8px;
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

export const Option = styled.option`
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  /* color: var(--dark-text-color); */
  color: red;
  opacity: 1;
`;

export const Input = styled.input`
  margin-top: 8px;
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



export const DropDownList = styled.div`
  position: absolute;
  top: 79px;
  width: 224px;
  height: 272px;
  padding: 14px 8px;
  padding-right: 0px;
  border-radius: 14px;
  background-color: white;
  border-width: 1px;
  border-color: var(--super-light-grey-text-color);
  color: var(--middle-light-grey-text-color);
  overflow: auto;
  z-index: 1;
  

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
    width: 16px;
  }
`;
