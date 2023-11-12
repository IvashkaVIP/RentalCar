import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container } from './CarsList.styled';
import { CarItem } from '../CarItem/CarItem';
import { Modal } from '../../components';

export const CarsList = ({ cars }) => {
  const [selectedCarId, setSelectedCarId] = useState(null);
  const openModal = id => setSelectedCarId(id);
  const closeModal = () => setSelectedCarId(null);  
  const getSelectedCarById = () => cars.find(car => car._id === selectedCarId);

  return (
    <Container>            
      {cars.map(car => (
        <CarItem key={car._id} car={car} openModal={openModal} />
      ))}      
      {selectedCarId && <Modal car={getSelectedCarById()} closeModal={closeModal} />}
    </Container>
  );
};


CarsList.propTypes = {
  cars: PropTypes.array.isRequired,
};
