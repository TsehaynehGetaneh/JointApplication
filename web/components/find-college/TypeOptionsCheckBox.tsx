import { FirstYearOptionCheckBoxProps } from "./FirstYearOptionCheckBox";

export const typeOptions = [
    {
      id: "public",
      label: "Public",
    },
    {
      id: "private",
      label: "Private",
    },
  ];

  interface TypeOptionCheckBoxProps extends FirstYearOptionCheckboxProps{

  }
  const TypeOptionCheckBox:React.FC<TypeOptionCheckBoxProps> = ({ option, checked, onChange }) => (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={option.id}
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={option?.id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={option.id} className="text-sm ml-3 font-medium text-gray-900">
        {option.lable}
      </label>
    </div>
  );

  export default TypeOptionCheckBox