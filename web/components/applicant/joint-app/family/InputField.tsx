
import React from 'react';

type InputFieldProps = {
  label: string;
  id: string;
  formikProps: any;
};

const InputField: React.FC<InputFieldProps> = ({ label, id, formikProps }) => {
  const { getFieldProps, touched, errors } = formikProps;

  return (
    <div className="mb-6">
      <label htmlFor={id} className="block font-bold mb-2">
        {label}
      </label>
      <input
        id={id}
        className="border border-gray-400 p-2 w-full focus:outline-none focus:border-blue-600"
        {...getFieldProps(id)}
      />
      {touched[id] && errors[id] && (
        <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
      )}
    </div>
  );
};

export default InputField;
