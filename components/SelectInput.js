import React, { useState } from 'react';
import Select from 'react-select';

export default function SelectInput(props){
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
    <>
      <Select
        styles={{
          control: (baseStyles) => ({ ...baseStyles, border: "none", outline: "none" }),
          value: (baseStyles) => ({ ...baseStyles, padding: "0px 0px", outline: "none" })
        }}
        classNamePrefix="select"
        // defaultValue={{value: "", label:"Choose Option"}}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        {...props}
      />
    </>
  );
};