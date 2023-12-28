
import React, { useState } from 'react';
import { Loader } from '../../components';
import {Main, Img} from '../Home/Home.styled'
import carRentImage from '../../components/Resources/Png/CarRentPoster.png';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <Main>
      <h1>Welcome "Сar Rental Warehouse" </h1>
      {isLoading && <Loader />}
      <Img
        src={carRentImage}
        alt="poster"
        onLoad={() => setIsLoading(false)}
        $loading={isLoading}
      />
      <p style={{ textAlign: 'center' }}>
        Welcome to the world of carefree travelling with "Сar Rental Warehouse"
        - your reliable partner in car rental in Ukraine! We create ideal
        conditions for your every journey to become an unforgettable adventure.
        Our cars are the embodiment of reliability and style. Whether you are
        travelling for business or adventure, our fleet is diverse and provides
        the perfect choice for every customer. We pride ourselves on offering
        you not just a vehicle, but the opportunity to immerse yourself in the
        freedom and enjoyment of every kilometre of your journey.
      </p>
    </Main>
  );
};