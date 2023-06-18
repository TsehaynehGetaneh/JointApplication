import React from 'react';

type InputProps = {
  label: string;
  id: string;
  formikProps: {
    getFieldProps: (name: string) => {
      value: any;
      onChange: (event: React.ChangeEvent<any>) => void;
      onBlur: (event: React.FocusEvent<any>) => void;
      name: string;
    };
    touched: {
      [field: string]: boolean;
    };
    errors: {
      [field: string]: string;
    };
  };
};

const InputField: React.FC<InputProps> = ({ label, id, formikProps }) => (
  <div className="mb-6">
    <label htmlFor={id} className="block font-bold mb-2">
      {label}
    </label>
    <input
      type="text"
      id={id}
      className="border border-gray-400 p-2 w-full focus:outline-none focus:border-blue-600"
      {...formikProps.getFieldProps(id)}/>
    {formikProps.touched[id] && formikProps.errors[id] && (
      <p className="text-red-500 text-sm mt-1">{formikProps.errors[id]}</p>
    )}
  </div>
);

export default InputField;
