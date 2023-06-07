import { FirstYearOptionCheckBoxProps } from "./FirstYearOptionCheckBox";

export const totalEnrollmentSizeOptions = [
    {
      id: "small",
      label: "Small (2,000 and under)",
    },
    {
      id: "medium",
      label: "Medium (2,001 to 14,999)",
    },
    {
      id: "large",
      label: "Large (15,000+)",
    },
  ];
  interface TotalEnrollmentSizeOptionCheckBoxProps extends FirstYearOptionCheckBoxProps{}

  const TotalEnrollmentSizeOptionCheckBox:React.FC<TotalEnrollmentSizeOptionCheckBoxProps> = ({ option, checked, onChange }) => (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={option?.id}
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

  export default TotalEnrollmentSizeOptionCheckBox