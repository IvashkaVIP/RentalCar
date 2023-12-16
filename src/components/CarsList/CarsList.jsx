import { useState } from 'react';
import { useSelector} from 'react-redux';
import {filtersSelectors} from "../../redux/Filters/filtersSelectors"
import { Container } from './CarsList.styled';
import { CarItem } from '../CarItem/CarItem';
import { Modal } from '../../components';

export const CarsList = ({ cars }) => {
  const [selectedCarId, setSelectedCarId] = useState(null);
  const openModal = id => setSelectedCarId(id);
  const closeModal = () => setSelectedCarId(null);
  const getSelectedCarById = () => cars.find(car => car._id === selectedCarId);

  // const areFiltersOn = obj =>
  // {
  // //  const res = !Object.values(obj).every(
  //   //  value => value === '' || value === null);
    
  //   const res= obj.brand
  // return res;
  // }
  
  const filter = useSelector(filtersSelectors.getAllFilters).brand;
  
  console.log(filter);
  

  return (
    <Container>
      {cars.map(car => (
        <CarItem key={car._id} car={car} openModal={openModal} />
      ))}
      {selectedCarId && (
        <Modal car={getSelectedCarById()} closeModal={closeModal} />
      )}
    </Container>
  );
};
