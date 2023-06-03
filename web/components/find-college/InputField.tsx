import React from 'react';

interface InputFieldProps {
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({ id }) => (
  <input
    type="search"
    name={id}
    placeholder="Enter location"
    className="border border-gray-900 outline-none px-4 py-2 w-full  rounded ml-2"
    id={id}
  />
);

export default InputField;
