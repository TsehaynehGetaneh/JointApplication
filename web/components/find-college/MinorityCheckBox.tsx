import { FirstYearOptionCheckBoxProps } from "./FirstYearOptionCheckBox";

export const minorityCheckbox = {
    id: "minority-serving-institution",
    label: "Minority serving institution",
  };
interface MinorityCheckboxProps extends FirstYearOptionCheckBoxProps{

}
  const MinorityCheckbox:React.FC<MinorityCheckboxProps> = ({ checked, onChange }) => (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={minorityCheckbox?.id}
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={minorityCheckbox?.id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={minorityCheckbox.id} className="text-sm ml-3 font-medium text-gray-900">
        {minorityCheckbox.label}
      </label>
    </div>
  );

  export default MinorityCheckbox