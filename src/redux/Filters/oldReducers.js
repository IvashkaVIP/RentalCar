const filtersInitialState = {
    brand: '',
    price: null,
    mileage: {from: null, to: null}
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/addBrand':
      return {
        ...state,
        brand: [...state.brand, action.payload],
      };
    case 'filters/deleteBrand':
      return {
        ...state,
        favoriteCarsId: state.brand.filter(
          carId => carId !== action.payload
        ),
      };

    default:
      return state;
  }
};
