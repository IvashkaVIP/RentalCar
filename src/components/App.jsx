import { Route, Routes } from 'react-router-dom';
import { Home, Catalog, Favorites } from '../pages';
import { SharedLayout, NotFound } from '../components';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
