import styled from "styled-components";

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

export const WrapperIcon = styled.div`
position: absolute;
top: 16px;
right: 16px;
&:hover{
  cursor: pointer;
}
`
export const ContainerImage = styled.div`
width:100%;
height: 248px;
border-radius: 14px;
background-color: grey;
margin-bottom: 14px;
`;