import {Form} from './Filters.styled';

export const Filters = () => {
  return (
    <>
      <Form name="search_form" autocomplete="on" novalidate>
        <label>
          Car brand
          <input type="email" name="carBrand" />
        </label>

        <label>
          Price/ 1 hour
          <input type="password" name="pricePerHour" />
        </label>

        <label>
          Car mileage/ km
          <input type="password" name="carMileageFrom" />
          <input type="password" name="carMileageTo" />
        </label>

        <button type="submit">Search</button>
      </Form>
    </>
  );
};
