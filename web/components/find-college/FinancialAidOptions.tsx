import { FirstYearOptionCheckboxProps } from "./FirstYearOptionCheckBox";

export const financialAidOptions = [
    {
      id: "international-aid",
      label: "Offers aid for international students",
    },
    {
      id: "merit-based-aid",
      label: "Offers merit-based aid",
    },
    {
      id: "need-based-aid",
      label: "Offers need-based aid",
    },
  ];

  interface FinancialAidOptionCheckboxProps extends FirstYearOptionCheckboxProps{

  }

  const FinancialAidOptionCheckbox:React.FC<FinancialAidOptionCheckboxProps> = ({ option, checked, onChange }) => (
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
export default FinancialAidOptionCheckbox