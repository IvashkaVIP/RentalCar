import React, { useState, useEffect } from 'react';
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
import { ReactComponent as ToggleChevronIcon } from '../../../assets/Svg/chevron.svg';

export const ItemInput = ({
  id,
  data,
  width,
  label,
  placeholder,
  handleSelectFilter,
}) => {
  const [currentPlaceHolder, setCurrentPlaceHolder] = useState(
      placeholder.store
      ? handleSelectFilter.viewPlaceholder(placeholder.store)
      : placeholder.default
  );
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
      setCurrentPlaceHolder(placeholder.default);
    } else {
      setCurrentPlaceHolder(handleSelectFilter.viewPlaceholder(choice));
    }
    handleSelectFilter.settingChoice(newChoice);
    setIsOpen(false);
  };

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
