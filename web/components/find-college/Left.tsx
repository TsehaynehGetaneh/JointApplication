'use client'

import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { string } from 'yup';
import { smartdevicemanagement_v1 } from 'googleapis';
import Button from './Button';
import InputField from './InputField';


function Left() {

  const [showStates, setShowStates] = useState<{[id:string]:boolean}>({})

  const toggleShow = (id: string) => {
    setShowStates((prevShowStates) => ({
      ...prevShowStates,
      [id]: !prevShowStates[id],
    }));
  };




  interface RegionCheckboxProps {
    region: string;
    checked: boolean;
    onChange: ChangeEvent<HTMLInputElement>;
  }
  const RegionCheckbox: React.FC<RegionCheckboxProps> = ({ region, checked, onChange }) => (
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


  const regions = [
    "Afar",
    "Amhara",
    "Oromia",
    "Somali",
    "Benishangul-Gumuz",
    "Gambella",
    "Sidama",
    "Tigray",
    "Southern Nations Nationalities and People Region (SNNPR)",
  ];

  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const handleRegionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedRegions((prevSelectedRegions) => [...prevSelectedRegions, name]);
    } else {
      setSelectedRegions((prevSelectedRegions) =>
        prevSelectedRegions.filter((region) => region !== name)
      );
    }
  };

  const firstYearOptions = [
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

  interface FirstYearOptionCheckboxProps {
    option: {
      id: string;
      lable: string;
    };
    checked: boolean;
    onChange: ChangeEvent<HTMLInputElement>;

  }
  const FirstYearOptionCheckbox: React.FC<FirstYearOptionCheckboxProps> = ({ option, checked, onChange }) => (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={option.id}
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={option.id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={option.id} className="text-sm ml-3 font-medium text-gray-900">
        {option.lable}
      </label>
    </div>
  );

  const [selectedFirstYearOptions, setSelectedFirstYearOptions] = useState<string[]>([]);

  const handleFirstYearOptionChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedFirstYearOptions((prevSelectedOptions) => [...prevSelectedOptions, name]);
    } else {
      setSelectedFirstYearOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== name)
      );
    }
  };

  const mastersOptions = [
    {
      id: "self-reported-test-scores",
      label: "Accepts self-reported test scores",
    },
    {
      id: "no-application-fee",
      label: "Charges no application fee",
    },
    {
      id: "guaranteed-admission",
      label: "Guaranteed admission program",
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

  interface MastersOptionCheckbox extends FirstYearOptionCheckboxProps {

  }
  const MastersOptionCheckbox: React.FC<MastersOptionCheckbox> = ({ option, checked, onChange }) => (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={option.id}
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={option.id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={option.id} className="text-sm ml-3 font-medium text-gray-900">
        {option.lable}
      </label>
    </div>
  );

  const [selectedmastersOptions, setSelectedMastersOptions] = useState<string[]>([]);

  const handleMastersOptionChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedMastersOptions((prevSelectedOptions) => [...prevSelectedOptions, name]);
    } else {
      setSelectedMastersOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== name)
      );
    }
  };

  const campusSettingOptions = [
    {
      id: "rural",
      label: "Rural",
    },
    {
      id: "urban",
      label: "Urban",
    },
    {
      id: "suburban",
      label: "Suburban",
    },
  ];

  interface CampusSettingOptionCheckboxProps extends MastersOptionCheckbox {

  }
  const CampusSettingOptionCheckbox: React.FC<CampusSettingOptionCheckboxProps> = ({ option, checked, onChange }) => (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={option.id}
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={option.id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={option.id} className="text-sm ml-3 font-medium text-gray-900">
        {option.lable}
      </label>
    </div>
  );

  const [selectedCampusSettingOptions, setSelectedCampusSettingOptions] = useState<string[]>([]);

  const handleCampusSettingOptionChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedCampusSettingOptions((prevSelectedOptions) => [...prevSelectedOptions, name]);
    } else {
      setSelectedCampusSettingOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== name)
      );
    }
  };

  const financialAidOptions = [
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

  interface FinancialAidOptionCheckboxProps extends CampusSettingOptionCheckboxProps{

  }

  const FinancialAidOptionCheckbox:React.FC<FinancialAidOptionCheckboxProps> = ({ option, checked, onChange }) => (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={option.id}
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={option.id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={option.id} className="text-sm ml-3 font-medium text-gray-900">
        {option.lable}
      </label>
    </div>
  );

  const [selectedFinancialAidOptions, setSelectedFinancialAidOptions] = useState<string[]>([]);

  const handleFinancialAidOptionChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedFinancialAidOptions((prevSelectedOptions) => [...prevSelectedOptions, name]);
    } else {
      setSelectedFinancialAidOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== name)
      );
    }
  };

  const minorityCheckbox = {
    id: "minority-serving-institution",
    label: "Minority serving institution",
  };
interface MinorityCheckboxProps extends CampusSettingOptionCheckboxProps{

}
  const MinorityCheckbox:React.FC<MinorityCheckboxProps> = ({ checked, onChange }) => (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={minorityCheckbox.id}
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={minorityCheckbox.id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={minorityCheckbox.id} className="text-sm ml-3 font-medium text-gray-900">
        {minorityCheckbox.label}
      </label>
    </div>
  );
  const [selectedMinorityCheckbox, setSelectedMinorityCheckbox] = useState(false);

  const handleMinorityCheckboxChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setSelectedMinorityCheckbox(checked);
  };
  const typeOptions = [
    {
      id: "public",
      label: "Public",
    },
    {
      id: "private",
      label: "Private",
    },
  ];

  interface TypeOptionCheckboxProps extends MinorityCheckboxProps{

  }
  const TypeOptionCheckbox:React.FC<TypeOptionCheckboxProps> = ({ option, checked, onChange }) => (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={option.id}
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={option.id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={option.id} className="text-sm ml-3 font-medium text-gray-900">
        {option.lable}
      </label>
    </div>
  );

  const [selectedTypeOptions, setSelectedTypeOptions] = useState<string[]>([]);

  const handleTypeOptionChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedTypeOptions((prevSelectedOptions) => [...prevSelectedOptions, name]);
    } else {
      setSelectedTypeOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== name)
      );
    }
  };

  const totalEnrollmentSizeOptions = [
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
  interface TotalEnrollmentSizeOptionCheckboxProps extends TypeOptionCheckboxProps{}

  const TotalEnrollmentSizeOptionCheckbox:React.FC<TotalEnrollmentSizeOptionCheckboxProps> = ({ option, checked, onChange }) => (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={option.id}
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={option.id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={option.id} className="text-sm ml-3 font-medium text-gray-900">
        {option.lable}
      </label>
    </div>
  );
  const [selectedTotalEnrollmentSizeOptions, setSelectedTotalEnrollmentSizeOptions] =
    useState<string[]>([]);

  const handleTotalEnrollmentSizeOptionChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedTotalEnrollmentSizeOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        name,
      ]);
    } else {
      setSelectedTotalEnrollmentSizeOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== name)
      );
    }
  };

  const specializedMissionOptions = [
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
interface SpecializedMissionOptionCheckboxProps extends FirstYearOptionCheckboxProps{}

  const SpecializedMissionOptionCheckbox:React.FC<SpecializedMissionOptionCheckboxProps> = ({ option, checked, onChange }) => (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        name={option.id}
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={option.id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={option.id} className="text-sm ml-3 font-medium text-gray-900">
        {option.lable}
      </label>
    </div>
  );
  const [selectedSpecializedMissionOptions, setSelectedSpecializedMissionOptions] =
    useState<string[]>([]);

  const handleSpecializedMissionOptionChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedSpecializedMissionOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        name,
      ]);
    } else {
      setSelectedSpecializedMissionOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== name)
      );
    }
  };

  return (
    <div className='grid  shadow-md'>
      <div className='bg-white w-[90%] md:w-[400px] mx-4 text-black flex flex-col my-20 gap-4'>
        <div className="flex items-center my-2">
          <input type="checkbox" name="undergrad" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" id="undergrad" />
          <label htmlFor="undergrad" className="text-sm ml-3 font-medium text-gray-900">Accepts undergraduate applications</label>
        </div>
        <div className="flex items-center my-2">
          <input type="checkbox" name="masters" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" id="masters" />
          <label htmlFor="masters" className="text-sm ml-3 font-medium text-gray-900">Accepts masters applications</label>
        </div>

        <div className="my-10">
          <Button id='location' onClick={toggleShow} showArrowDown={showStates['location']}>Location</Button>
          {showStates["location"] && <InputField id="location-input" />}
          <Button id="region" onClick={toggleShow} showArrowDown={showStates["region"]}>
            Region
          </Button>
          {showStates["region"] && (
            <div className="my-2">
              {regions.map((region) => (
                <RegionCheckbox
                  key={region}
                  region={region}
                  checked={selectedRegions.includes(region)}
                  onChange={handleRegionChange}
                />
              ))}
            </div>
          )}
          <Button id='undergraduate' onClick={toggleShow} showArrowDown={showStates['undergraduate']}>Application for undergraduate students</Button>
          {showStates["undergraduate"] && (
            <div className="my-2">
              {firstYearOptions.map((option) => (
                <FirstYearOptionCheckbox
                  key={option.id}
                  lable={option.label}
                  checked={selectedFirstYearOptions.includes(option.id)}
                  onChange={handleFirstYearOptionChange}
                />
              ))}
            </div>
          )}
          <Button id='masters' onClick={toggleShow} showArrowDown={showStates['masters']}>Application for masters students</Button>
          {showStates["masters"] && (
            <div className="my-2">
              {mastersOptions.map((option) => (
                <MastersOptionCheckbox
                  key={option.id}
                  lable={option.label}
                  checked={selectedmastersOptions.includes(option.id)}
                  onChange={handleMastersOptionChange}
                />
              ))}
            </div>
          )}
          <Button id='campus-setting' onClick={toggleShow} showArrowDown={showStates['campus-setting']}>Campus setting</Button>
          {showStates["campus-setting"] && (
            <div className="my-2">
              {campusSettingOptions.map((option) => (
                <CampusSettingOptionCheckbox
                  key={option.id}
                  lable={option.label}
                  checked={selectedCampusSettingOptions.includes(option.id)}
                  onChange={handleCampusSettingOptionChange}
                />
              ))}
            </div>
          )}
          <Button id='financial-aid' onClick={toggleShow} showArrowDown={showStates['financial-aid']}>Financial aid</Button>
          {showStates["financial-aid"] && (
            <div className="my-2">
              {financialAidOptions.map((option) => (
                <FinancialAidOptionCheckbox
                  key={option.id}
                  lable={option.label}
                  checked={selectedFinancialAidOptions.includes(option.id)}
                  onChange={handleFinancialAidOptionChange}
                />
              ))}
            </div>
          )}
          <Button id='minority-serving-institution' onClick={toggleShow} showArrowDown={showStates['minority-serving-institution']}>Minority serving institution</Button>
          {showStates["minority-serving-institution"] && (
            <div className="my-2">
              <MinorityCheckbox
                checked={selectedMinorityCheckbox}
                onChange={handleMinorityCheckboxChange}
              />
            </div>
          )}
          <Button id='type' onClick={toggleShow} showArrowDown={showStates['type']}>Type</Button>
          {showStates["type"] && (
            <div className="my-2">
              {typeOptions.map((option) => (
                <TypeOptionCheckbox
                  key={option.id}
                  lable={option.label}
                  checked={selectedTypeOptions.includes(option.id)}
                  onChange={handleTypeOptionChange}
                />
              ))}
            </div>
          )}
          <Button id='total-enrollment-size' onClick={toggleShow} showArrowDown={showStates['total-enrollment-size']}>Total Enrollment Size</Button>
          {showStates["total-enrollment-size"] && (
            <div className="my-2">
              {totalEnrollmentSizeOptions.map((option) => (
                <TotalEnrollmentSizeOptionCheckbox
                  key={option.id}
                  lable={option.label}
                  checked={selectedTotalEnrollmentSizeOptions.includes(option.id)}
                  onChange={handleTotalEnrollmentSizeOptionChange}
                />
              ))}
            </div>
          )}
          <Button id='specialized-mission' onClick={toggleShow} showArrowDown={showStates['specialized-mission']}>Specialized mission</Button>
          {showStates["specialized-mission"] && (
            <div className="my-2">
              {specializedMissionOptions.map((option) => (
                <SpecializedMissionOptionCheckbox
                  key={option.id}
                  lable={option.label}
                  checked={selectedSpecializedMissionOptions.includes(option.id)}
                  onChange={handleSpecializedMissionOptionChange}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Left