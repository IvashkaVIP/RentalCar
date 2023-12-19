import {
  // useSelector,
  useDispatch,
} from 'react-redux';
// import { filtersSelectors } from 'redux/Filters/filtersSelectors';
import { addFilters } from 'redux/Filters/filtersSlice';
import { ItemInput } from './ItemInput';
import {
  Container,
  Form,
  Button,
  DoubleInput,
  WrapperInput,
  TextBeforeInput,
  Label,
  Input,
} from './Filters.styled';
import { makes, prices } from '../Resources/Data/makes';
import {
  // useEffect,
  useState,
} from 'react';

export const Filters = () => {
  const dispatch = useDispatch();
  // const filters = useSelector(filtersSelectors.getAllFilters);
  // const {
  //   // brand,
  //   // price,
  //   // mileage: { from, to },
  // } = filters;

  const [selectingBrand, setSelectingBrand] = useState('');
  const [selectingPrice, setSelectingPrice] = useState('');
  const [selectingMileage, setSelectingMileage] = useState({
    From: '',
    To: '',
  });

  const handleClickSearchButton = () => {
    dispatch(
      addFilters({
        brand: selectingBrand,
        price: selectingPrice,
        mileage: {
          from: parseFloat(selectingMileage.From.replace(/,/g, '')),
          to: parseFloat(selectingMileage.To.replace(/,/g, '')),
        },
      })
    );
  };

  const handleMileageChange = e => {
    let { name, value } = e.target;
    value = value.replace(/\D/g, '');
    value =
      value === '' ? '' : new Intl.NumberFormat('en-US').format(Number(value));
    setSelectingMileage(prevState => ({ ...prevState, [name]: value }));
  };

  // console.log("Filter 1 >>>>>   Brand : ",brand)  // dev

  return (
    <Container>
      <Form name="search_form">
        <ItemInput
          id="carBrand"
          data={makes}
          width="224px"
          label="Car brand"
          // placeholder={brand ? brand : 'Enter the text'}
          placeholder="Enter the text"
          handleSelectFilter={{
            settingChoice: choice => {
              console.log('callback 1 >>> choice: ', choice);
              setSelectingBrand(choice);
            },
            viewPlaceholder: choice => choice,
          }}
        />

        <ItemInput
          id="pricePerHour"
          data={prices}
          width="125px"
          label="Price/ 1 hour"
          placeholder="To  $"
          handleSelectFilter={{
            settingChoice: choice => setSelectingPrice(choice),
            viewPlaceholder: choice => `To  ${choice}$`,
          }}
        />

        <Label>
          Car mileage/ km
          <DoubleInput>
            <WrapperInput>
              <TextBeforeInput>From</TextBeforeInput>
              <Input
                type="text"
                name="From"
                value={selectingMileage.From}
                onChange={handleMileageChange}
                style={{
                  paddingLeft: '70px',
                  borderBottomRightRadius: 0,
                  borderTopRightRadius: 0,
                  borderRight: '1px solid rgba(138, 138, 137, 0.2)',
                }}
              />
            </WrapperInput>
            <WrapperInput>
              <TextBeforeInput>To</TextBeforeInput>
              <Input
                type="text"
                name="To"
                value={selectingMileage.To}
                onChange={handleMileageChange}
                style={{
                  paddingLeft: '45px',
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: 0,
                }}
              />
            </WrapperInput>
          </DoubleInput>
        </Label>

        <Button type="submit" onClick={() => handleClickSearchButton()}>
          Search
        </Button>
      </Form>
    </Container>
  );
};
