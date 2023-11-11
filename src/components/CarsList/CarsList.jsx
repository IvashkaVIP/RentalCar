import PropTypes from 'prop-types';
import { Container } from './CarsList.styled';
import { CarItem } from '../CarItem/CarItem';

export const CarsList = ({ cars }) => {
  
   return (
    <Container>
      {cars.map(car => (
        <CarItem key={cars.indexOf(car)} car={car} />
      ))}  
    </Container>
  );
};

CarsList.propTypes = {
  cars: PropTypes.array.isRequired,
};
