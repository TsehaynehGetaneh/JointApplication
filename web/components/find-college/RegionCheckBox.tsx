import { ChangeEvent } from "react";

interface RegionCheckBoxProps {
    region: string;
    checked: boolean;
    onChange: ChangeEvent<HTMLInputElement>;
  }
 const RegionCheckBox: React.FC<RegionCheckBoxProps> = ({ region, checked, onChange }) => (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={region}
        className="bg-gray-50 border-blue-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={region}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={region} className="text-sm ml-3 font-medium text-gray-900">
        {region}
      </label>
    </div>
  );

  export default RegionCheckBox
