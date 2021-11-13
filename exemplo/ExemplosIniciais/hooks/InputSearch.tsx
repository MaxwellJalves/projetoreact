import React from "react";

interface Props {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeHolder?: string;
}

const InputSearch: React.FC<Props> = ({ value, onChange, placeHolder }) => {
  return (
    <>
      <input
        type="search"
        placeholder={placeHolder || 'Informe  os dados para pesquisa'}
        value={value}
        onChange={onChange}
        
      />
    </>
  );
};

export default InputSearch;
