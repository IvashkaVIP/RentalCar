export const makes = [
  '---All brands---',
  'Buick',
  'Volvo',
  'Hummer',
  'Subaru',
  'Maserati',
  'Lexus',
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
  'Land Rover',
  'Chrysler',
  'Kia',
  'Land',
];

 const pricesArray = () => {
   let res = ["---All prices---"];
   for (let i = 10; i <= 200; i += 10) {
     res.push(i);
   }
   return res;
};
 
export const prices = pricesArray();