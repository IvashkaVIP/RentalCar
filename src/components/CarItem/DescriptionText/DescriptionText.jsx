import PropTypes from "prop-types";
import { WrapperText } from "./DescriptionText.styled";

export const DescriptionText = ({ car }) => {
  const {
    id,
    // make,
    type,
    model,
    // year,
    // rentalPrice,
    address,
    rentalCompany,
    accessories,
  } = car;

  const getCity = () => address.split(`, `)[1];
  const getCountry = () => address.split(`, `)[2];
  const formatingType = () =>
    type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
    const getMainAccessories = () => {
        if (accessories.find((item) => item.toLowerCase().includes("premium sound system")))
            return "Premium Sound System";          
        if (
          accessories.find((item) =>
            item.toLowerCase().includes("audio system")
          )
        )
          return "Audio System";          
        if (
          accessories.find((item) =>
            item.toLowerCase().includes("power liftgate")
          )
        )
          return "Power liftgate";          
       
    
    return accessories[0];
  };
  // console.log(getCity())

  return (
    <>
      <WrapperText style={{ marginBottom: "4px" }}>
        {getCity()}
        <Separator />
        {getCountry()}
        <Separator />
        {rentalCompany}
      </WrapperText>
      <WrapperText>
        {formatingType()}
        <Separator />
        {model}
        <Separator />
        {id}
        <Separator />
        {getMainAccessories()}
      </WrapperText>
    </>
  );
};

const Separator = () => (
  <span style={{ color: 'var(--decoration-color)', padding: '0 6px' }}>|</span>
);

DescriptionText.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    accessories: PropTypes.array.isRequired,
  }).isRequired,
};
