import styled from 'styled-components';

export const Main = styled.main`
display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 970px;
margin: 0 auto;
padding: 25px 16px;
`;

export const Img = styled.img`
display: ${({$loading}) => ($loading ? 'none' : 'block')};            
width: 700px;
height: auto;
margin: 25px 0;
`;