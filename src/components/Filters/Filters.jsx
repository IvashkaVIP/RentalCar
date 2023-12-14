import {Container, Form, Label, Input, Button} from './Filters.styled';

export const Filters = () => {
  return (
    <Container>
      <Form name="search_form">
        <Label width={'224px'}>
          Car brand
          <Input type="text" name="carBrand" placeholder="Enter the text" />
        </Label>

        <Label width={'125px'}>
          Price/ 1 hour
          <Input type="text" name="pricePerHour" placeholder="To $" />
        </Label>

        <Label width={'320px'}>
          Car mileage/ km
          <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
            <Input
              type="text"
              name="carMileageFrom"
              placeholder="From"
              style={{
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                borderRight: '1px solid rgba(138, 138, 137, 0.2)',
              }}
            />
            <Input
              type="text"
              name="carMileageTo"
              placeholder="To"
              style={{
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
              }}
            />
          </div>
        </Label>

        <Button type="submit">Search</Button>
      </Form>
    </Container>
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
