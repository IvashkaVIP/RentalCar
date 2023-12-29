import {
  Container,
  WrapperContent,
  Header,
  Logo,
  Nav,
  Link,
} from './SharedLayout.styled';
import { ReactComponent as CarIcon } from '../../assets//Svg/car.svg';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <WrapperContent>
          <Logo>
            <CarIcon width="25px" height="25px" />
            Сar Rental Warehouse
          </Logo>
          <Nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/favorites">Favorites</Link>
          </Nav>
        </WrapperContent>
      </Header>
      <Outlet />
    </Container>
  );
};
