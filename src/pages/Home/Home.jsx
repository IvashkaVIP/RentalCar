
import React, { useState } from 'react';
import { Loader } from '../../components';
import carRentImage from '../../components/Resources/Png/CarRentPoster.png';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <main>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '970px',
          margin: '0 auto',
        }}
      >
        <h1 style={{ padding: '50px 0' }}>Welcome "Сar Rental Warehouse" </h1>
        {isLoading && <Loader />}
        <img
          src={carRentImage}
          alt="poster"
          style={{
            display: isLoading ? 'none' : 'block',
            width: '700px',
            height: 'auto',
          }}
          onLoad={()=>setIsLoading(false)}
        />
        <p style={{ paddingTop: '50px', textAlign: 'center' }}>
          Welcome to the world of carefree travelling with "Сar Rental
          Warehouse" - your reliable partner in car rental in Ukraine! We create
          ideal conditions for your every journey to become an unforgettable
          adventure. Our cars are the embodiment of reliability and style.
          Whether you are travelling for business or adventure, our fleet is
          diverse and provides the perfect choice for every customer. We pride
          ourselves on offering you not just a vehicle, but the opportunity to
          immerse yourself in the freedom and enjoyment of every kilometre of
          your journey.
        </p>
      </div>
    </main>
  );
};

// <main>
//   <div
//     style={{
//       display: 'flex',
//       justifyContent: 'center',
//       flexWrap: 'wrap',
//       maxWidth: '970px',
//       margin: '0 auto',
//     }}
//   >
//     <h1 style={{ padding: '50px 0' }}>Welcome "Сar Rental Warehouse" </h1>
//     <img src="https://via.placeholder.com/960x240" alt="" />
//     <p style={{ paddingTop: '50px', textAlign: 'center' }}>
//       Welcome to the world of carefree travelling with "Сar Rental
//       Warehouse" - your reliable partner in car rental in Ukraine! We create
//       ideal conditions for your every journey to become an unforgettable
//       adventure. Our cars are the embodiment of reliability and style.
//       Whether you are travelling for business or adventure, our fleet is
//       diverse and provides the perfect choice for every customer. We pride
//       ourselves on offering you not just a vehicle, but the opportunity to
//       immerse yourself in the freedom and enjoyment of every kilometre of
//       your journey.
//     </p>
//   </div>
// </main>;
