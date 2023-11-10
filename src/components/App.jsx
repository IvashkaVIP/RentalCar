import { Route, Routes } from 'react-router-dom';
import { Home, Catalog, Favorites } from '../pages';
import { NotFound, Navigation } from '../components';
import { Container } from './App.styled';


export const App = () => {
  return (
    <Container>
      <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      </Container>
  );
};
