import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 15px 0;
  background-color: white;
  box-shadow: 0px 0px 35px 20px white;
  border-bottom: 1px solid black;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1220px;
  margin: 0 auto;
 @media screen and (max-width: 505px) {
    justify-content: center;
    row-gap: 25px;
  }

`;

export const Logo = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  margin: 0;
  padding: 0 16px;
  @media screen and (max-width: 236px) {    
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
  }


`;

export const Nav = styled.nav`
  @media screen and (max-width: 300px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
