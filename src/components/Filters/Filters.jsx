import { useDispatch } from 'react-redux';
import {
  addBrandFilter,
  // addPriceFilter,
  // addMileageFilter
} from 'redux/Filters/filtersSlice';
import { ItemInput } from './CarBrandInput';
import {
  Container, Form,
  // Label, Input, Button
} from './Filters.styled';
import{ makes } from "../Resources/Data/makes"

export const Filters = () => {
  const dispatch = useDispatch();



  return (
    <Container>
      <Form name="search_form">
        <ItemInput
          id="carBrand"
          data={makes}
          width="224px"
          label="Car brand"
          placeholder="Enter the text"
          handleSelectFilter={(choice)=>dispatch(addBrandFilter(choice))}                      
        />

        {/* <Label width={'125px'}>
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

        <Button type="submit">Search</Button> */}
      </Form>
    </Container>
  );
};




