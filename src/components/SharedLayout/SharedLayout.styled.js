import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  background-color: white;
  box-shadow: 0px 0px 35px 20px white;

  display: flex;
  max-width: 1440px;
  justify-content: center;
  padding: 8px 120px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 500px;
  max-width: 1440px;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
