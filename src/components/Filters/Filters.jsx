import {
  // useSelector,
  // useDispatch
} from 'react-redux';
// import { filtersSelectors } from 'redux/Filters/filtersSelectors';
// import {
//   // addBrandFilter,
//   // addPriceFilter,
//   // addMileageFilter
// } from 'redux/Filters/filtersSlice';
import { ItemInput } from './ItemInput';
import {
  Container,
  Form,
  Button,
  // Label, Input,
} from './Filters.styled';
import { makes, prices } from '../Resources/Data/makes';
import { useState } from 'react';

export const Filters = ({ handleClickSearch }) => {
  // const dispatch = useDispatch();
  // const filters = useSelector(filtersSelectors.getAllFilters);
  // const {
  //   // brand,
  //   // price,
  //   // mileage: { from, to },
  // } = filters;
  
  const [selectBrand, setSelectBrand] = useState('');
  // const [selectPrice, setSelectPrice] = useState('');
  // const [selectMileageFrom, setSelectMileageFrom] = useState('');
  // const [selectMileageTo, setSelectMileageTo] = useState('');

  return (
    <Container>
      <Form name="search_form">
        <ItemInput
          id="carBrand"
          data={makes}
          width="224px"
          label="Car brand"
          placeholder="Enter the text"
          handleSelectFilter={choice => setSelectBrand(choice)}
        />

        <ItemInput
          id="pricePerHour"
          data={prices}
          width="125px"
          label="Price/ 1 hour"
          placeholder="To $"
          // handleSelectFilter={choice => setSelectPrice(choice)}
        />

        
{/*
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
        </Label> */}

        <Button type="submit" onClick={() => handleClickSearch(selectBrand)}>
          Search
        </Button>
      </Form>
    </Container>
  );
};
