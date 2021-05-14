import SelectDropDown from "../../assets/img/dropdown-icon.svg";
import React from "react";
import BaseSelect from "react-select";

const CustomDropdownIndicator = (...props) => {
  return <img src={SelectDropDown} alt="" />;
};

export const Select = ({
  disabled,
  isMulti,
  options,
  getOptionLabel,
  formatOptionLabel,
  placeholder,
  noOptionsMessage,
  className,
  noDataText,
  onChange,
  value,
  ...props
}) => {
  return (
    <BaseSelect
      {...props}
      className={"simple-select " + (className ? className : "")}
      classNamePrefix={"simple-select"}
      components={{ DropdownIndicator: CustomDropdownIndicator }}
      options={options}
      getOptionLabel={getOptionLabel}
      formatOptionLabel={formatOptionLabel}
      isMulti={isMulti}
      value={value}
      isOptionDisabled={(option) => option.disabled}
      onChange={(option, inputObj) => onChange(option, inputObj)}
      placeholder={placeholder ? placeholder : ""}
      noOptionsMessage={() => (noDataText ? noDataText : "Нет опций")}
      isDisabled={disabled}
    />
  );
};
