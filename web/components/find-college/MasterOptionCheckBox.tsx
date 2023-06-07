import { FirstYearOptionCheckBoxProps } from "./FirstYearOptionCheckBox";

export const mastersOptions = [
    {
      id: "self-reported-test-scores",
      lable: "Accepts self-reported test scores",
    },
    {
      id: "no-application-fee",
      lable: "Charges no application fee",
    },
    {
      id: "guaranteed-admission",
      lable: "Guaranteed admission program",
    },
    {
      id: "no-personal-essay",
      lable: "No personal essay required",
    },
    {
      id: "no-letter-of-recommendation",
      lable: "No letter of recommendation required",
    },
    {
      id: "test-optional",
      lable: "Test Optional/Flexible",
    },
  ];

  interface MastersOptionCheckBox extends FirstYearOptionCheckBoxProps {

  }
  const MastersOptionCheckBox: React.FC<MastersOptionCheckBox> = ({ id,label, checked, onChange }) => (
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


  export default MastersOptionCheckBox