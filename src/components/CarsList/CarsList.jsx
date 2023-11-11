import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container } from './CarsList.styled';
import { CarItem } from '../CarItem/CarItem';
import { Modal } from '../../components';

export const CarsList = ({ cars }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
    
   return (
     <Container>
       {cars.map(car => (
         <CarItem openModal={openModal} key={cars.indexOf(car)} car={car} />
       ))}
       {showModal && <Modal closeModal={closeModal} />}
     </Container>
   );
};

CarsList.propTypes = {
  cars: PropTypes.array.isRequired,
};
