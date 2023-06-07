import { ChangeEvent, useState } from "react";

export const firstYearOptions = [
  {
    id: "self-reported-test-scores",
    label: "Accepts self-reported test scores",
  },
  {
    id: "no-application-fee",
    label: "Charges no application fee",
  },
  {
    id: "no-personal-essay",
    label: "No personal essay required",
  },
  {
    id: "no-letter-of-recommendation",
    label: "No letter of recommendation required",
  },
  {
    id: "test-optional",
    label: "Test Optional/Flexible",
  },
];

export interface FirstYearOptionCheckBoxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: ChangeEvent<HTMLInputElement>;
}

const FirstYearOptionCheckbox: React.FC<FirstYearOptionCheckBoxProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  if (!id) {
    return null;
  }

  return (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={id}
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="text-sm ml-3 font-medium text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default FirstYearOptionCheckbox