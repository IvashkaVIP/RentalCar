import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-bottom: 50px;
  background-color: bisque;
`;

export const Form = styled.form`
  display: flex;
  /* justify-content: space-between; */
  /* align-items: end; */
  background-color: aqua;  
  /* max-width: 859px; */
`;

// export const Label = styled.label`  
  
//   margin-bottom: 20px;
//   position: relative;  
//   background-color: #ff0000;  
//   margin-right: 18px;
//   font-family: 'Manrope', sans-serif;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 18px;
//   color: var(--grey-text-color);
// `;

// export const Input = styled.input`
//   margin-top: 8px;
//   width: 100%;
//   height: 48px;
//   padding-left: 18px;
//   border-radius: 14px;
//   border: none;
//   background-color: var(--background-second-grey-color);
//   &::placeholder {
//     font-family: 'Manrope', sans-serif;
//     font-size: 18px;
//     font-weight: 500;
//     line-height: 20px;
//     color: var(--dark-text-color);
//     opacity: 1;
//   }
//   &:focus {
//     outline: none;
//   }
// `;

export const Button = styled.label`
  width: 136px;
  height: 48px;
  text-align: center;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 48px;
  color: var(--light-text-color);
  border-radius: 12px;
  background-color: var(--normal-button-color);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--hover-button-color);
  }
`;
