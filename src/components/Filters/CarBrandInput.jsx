// import React, { useState } from 'react';
import { Label } from './Filters.styled';
import { Input, DropDownList } from './CarBrandInput.styled';


export const CarBrandInput = () => {
    // const [selectedBrand,setSelectedBrand] = useState('');

    // const handleSelectBrand = event => {
    //   setSelectedBrand(event.target.value);
    // };

  return (
    <div style={{ position: 'relative', marginRight: '18px', width: '224px' }}>
      <Label width={'100px'}>
        Car brand
        <Input type="text" name="carBrand" placeholder="Enter the text" />
      </Label>
      <DropDownList>
        <ul>
          {makes.map((maker, index) => (
            <li key={index} value={maker}>
              {maker}
            </li>
          ))}
        </ul>
      </DropDownList>
    </div>
  );
};

const makes = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];


//<>
//  <Label width={'224px'}>
//    Car brand
//    <Input type="text" name="carBrand" placeholder="Enter the text" />
//  </Label>
//</>;


// import React, { useState } from 'react';
// import { Label } from './Filters.styled';
// import { Select, Option } from './CarBrandInput.styled';

// export const CarBrandInput = () => {
//   const [selectedBrand, setSelectedBrand] = useState('');

//   const handleSelectBrand = event => {
//     setSelectedBrand(event.target.value);
//   };

//   return (
//     <>
//       <Label width={'224px'}>
//         Car brand
//         <Select
//           type="text"
//           name="carBrand"
//           list="carMakes"
//           //   placeholder="Enter the text"
//           value={selectedBrand}
//           onChange={handleSelectBrand}
//         >
//           <Option value="" disabled hidden>
//             Enter the text
//           </Option>
//           <Option value=""></Option>
//           {makes.map((maker, index) => (
//             <option key={index} value={maker}>
//               {maker}
//             </option>
//           ))}
//         </Select>
//       </Label>
//     </>
//   );
// };
