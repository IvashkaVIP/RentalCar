import {
  Container,
  WrapperContent,
  Header,
  Logo,
  Link,
} from './SharedLayout.styled';
import { ReactComponent as CarIcon } from '../Resources/Svg/car.svg';
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
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/favorites">Favorites</Link>
          </nav>
        </WrapperContent>
      </Header>
      <Outlet />
    </Container>
  );
};
