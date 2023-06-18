import React from 'react';

interface CustomFileInputProps {
  field: {
    name: string;
    value: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
  form: {
    setFieldValue: (field: string, value: any) => void;
    setFieldTouched: (field: string, touched?: boolean, shouldValidate?: boolean) => void;
  };
  label: string;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({ field, form, label }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0] || null;
    form.setFieldValue(field.name, file);
    field.onChange(event);
  };

  const handleBlur = () => {
    form.setFieldTouched(field.name, true);
    field.onBlur();
  };

  return (
    <div className="mt-10">
      <label className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <label
        htmlFor={field.name}
        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 
        hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 
        focus-within:ring-blue-500"
      >
        <span className="pl-4 pr-2">{field.value ? field.value.name : 'Choose a file'}</span>
        <input
          id={field.name}
          name={field.name}
          type="file"
          accept=".txt,.doc,.docx,.pdf"
          className="sr-only"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
    </div>
  );
};

export default CustomFileInput;
