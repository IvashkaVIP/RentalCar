import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addBrandFilter } from 'redux/Filters/filtersSlice';
// import { Label } from './Filters.styled';
import {
  ContainerInput,
  Label,
  WrapperInputField,
  Input,
  DropDownContainer,
  DropDownList,
  ItemDropDownList,
  ToggleChevron,
} from './ItemInput.styled';
import { ReactComponent as ToggleChevronIcon } from '../Resources/Svg/chevron.svg';

export const ItemInput = ({
  id,
  data,
  width,
  label,
  placeholder,
  handleSelectFilter,
  store,
}) => {
  const [currentPlaceHolder, setCurrentPlaceHolder] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') setIsOpen(false);
    };

    const handleMouseDown = evt => {
      if (!evt.target.closest('.dropdown-container')) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const currentHandleFilter = choice => {
    let newChoice = choice;
    if (choice === data[0]) {
      newChoice = '';
      setCurrentPlaceHolder(placeholder);
    } else {
      setCurrentPlaceHolder(handleSelectFilter.viewPlaceholder(choice));
    }
    handleSelectFilter.settingChoice(newChoice);
    setIsOpen(false);
  };

  // console.log("ItemInput 1 >>>   CurrentPlaceHolder : ", currentPlaceHolder)
  // console.log('ItemInput 2 >>>   Store : ', handleSelectFilter.store);

  // if(handleSelectFilter.store) setCurrentPlaceHolder(handleSelectFilter.store);

  return (
    <ContainerInput width={width}>
      <Label htmlFor={id}>{label}</Label>
      <WrapperInputField>
        <Input type="text" id={id} placeholder={currentPlaceHolder} disabled />
        <ToggleChevron $isOpen={isOpen} onClick={toggleDropDown}>
          <ToggleChevronIcon width="20px" height="20px" />
        </ToggleChevron>
      </WrapperInputField>

      <DropDownContainer className="dropdown-container" $isOpen={isOpen}>
        <DropDownList>
          {data.map((item, index) => (
            <ItemDropDownList
              key={index}
              value={item}
              onClick={() => currentHandleFilter(item)}
            >
              {item}
            </ItemDropDownList>
          ))}
        </DropDownList>
      </DropDownContainer>
    </ContainerInput>
  );
};
