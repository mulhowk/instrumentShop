import React, { useState } from 'react';

const AdminDropDown = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const jsonValues = [
    { id: 1, name: '전회원' },
    { id: 2, name: '관계자' },
    { id: 3, name: '와아악' },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      {jsonValues.map((value) => (
        <option key={value.id} value={value.id}>
          {value.name}
        </option>
      ))}
    </select>
  );
};

export default AdminDropDown;