import { FirstYearOptionCheckBoxProps } from "./FirstYearOptionCheckBox";

export const specializedMissionOptions = [
    {
      id: "womens-college",
      label: "Women's College",
    },
    {
      id: "mens-college",
      label: "Men's College",
    },
    {
      id: "coordinate",
      label: "Coordinate",
    },
    {
      id: "co-ed",
      label: "Co-Ed",
    },
    {
      id: "religious-affiliation",
      label: "Religious Affiliation",
    },
  ];
interface SpecializedMissionOptionCheckBoxProps extends FirstYearOptionCheckBoxProps{}

  const SpecializedMissionOptionCheckBox:React.FC<SpecializedMissionOptionCheckBoxProps> = ({ option, checked, onChange }) => (
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

  export default SpecializedMissionOptionCheckBox