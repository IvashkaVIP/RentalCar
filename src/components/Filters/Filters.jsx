import { CarBrandInput } from './CarBrandInput';
import {Container, Form, Label, Input, Button} from './Filters.styled';

export const Filters = () => {
  return (
    <Container>
      <Form name="search_form">

        <CarBrandInput/>

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




