import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategorySelector = ({
  placeholder = 'Lentes Importados',
  options = [],
  baseRoute = '/Productos',
}) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) navigate(`${baseRoute}/${value}`);
  };

  return (
    <select onChange={handleChange} defaultValue="">
      <option value="">{placeholder}</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </select>
  );
};

export default CategorySelector;
