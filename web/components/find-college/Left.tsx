'use client'
import React, { ChangeEvent, useState } from 'react'

import RegionCheckBox from './RegionCheckBox'
import Button from './Button';
import InputField from './InputField';
import FirstYearOptionCheckbox, { firstYearOptions } from './FirstYearOptionCheckBox';
import CampusSettingOptionCheckbox, { campusSettingOptions } from './CampusSettingOptions';
import FinancialAidOptionCheckbox, { financialAidOptions } from './FinancialAidOptions';
import MinorityCheckbox from './MinorityCheckBox';
import MastersOptionCheckBox, { mastersOptions } from './MasterOptionCheckBox';
import TotalEnrollmentSizeOptionCheckBox, { totalEnrollmentSizeOptions } from './TotalEnrollmentSizeOptionCheckBox';
import { typeOptions } from './TypeOptionsCheckBox';
import SpecializedMissionOptionCheckBox, { specializedMissionOptions } from './SpecializedMissionOptionCheckBox';


function Left() {

  const [showStates, setShowStates] = useState<{ [id: string]: boolean }>({})

  const toggleShow = (id: string) => {
    setShowStates((prevShowStates) => ({
      ...prevShowStates,
      [id]: !prevShowStates[id],
    }));
  };

  const [selectedFirstYearOptions, setSelectedFirstYearOptions] = useState<string[]>([]);

  const handleFirstYearOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedFirstYearOptions((prevSelectedOptions) => {
      if (checked) {
        return [...prevSelectedOptions, name];
      } else {
        return prevSelectedOptions.filter((option) => option !== name);
      }
    });
  };

  const [selectedMastersOptions, setSelectedMastersOptions] = useState<string[]>([]);

  const handleMastersOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSelectedMastersOptions((prevSelectedOptions) => {
      if (checked) {
        return [...prevSelectedOptions, name];
      } else {
        return prevSelectedOptions.filter((option) => option !== name);
      }
    });
  };


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


  const [selectedCampusSettingOptions, setSelectedCampusSettingOptions] = useState<string[]>([]);

  const handleCampusSettingOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedCampusSettingOptions((prevSelectedOptions) => [...prevSelectedOptions, name]);
    } else {
      setSelectedCampusSettingOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== name)
      );
    }
  };


  const [selectedFinancialAidOptions, setSelectedFinancialAidOptions] = useState<string[]>([]);

  const handleFinancialAidOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedFinancialAidOptions((prevSelectedOptions) => [...prevSelectedOptions, name]);
    } else {
      setSelectedFinancialAidOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== name)
      );
    }
  };


  const [selectedMinorityCheckbox, setSelectedMinorityCheckbox] = useState(false);

  const handleMinorityCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setSelectedMinorityCheckbox(checked);
  };

  const [selectedTypeOptions, setSelectedTypeOptions] = useState<string[]>([]);

  const handleTypeOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedTypeOptions((prevSelectedOptions) => [...prevSelectedOptions, name]);
    } else {
      setSelectedTypeOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== name)
      );
    }
  };


  const [selectedTotalEnrollmentSizeOptions, setSelectedTotalEnrollmentSizeOptions] =
    useState<string[]>([]);

  const handleTotalEnrollmentSizeOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
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


  const [selectedSpecializedMissionOptions, setSelectedSpecializedMissionOptions] =
    useState<string[]>([]);

  const handleSpecializedMissionOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    <div className='grid  shadow-md bg-white  '>
      <div className='w-[90%] md:w-[400px]  text-black flex flex-col mt-20 gap-4'>
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
                <RegionCheckBox
                  key={region}
                  region={region}
                  checked={selectedRegions.includes(region)}
                  onChange={handleRegionChange}
                />
              ))}
            </div>
          )}
          <Button id='undergraduate' onClick={toggleShow} showArrowDown={showStates['undergraduate']}>
            Application for undergraduate students
          </Button>
          {showStates["undergraduate"] && (
            <div className="my-2">
              {firstYearOptions.map((option: any) => (
                <FirstYearOptionCheckbox
                  key={option.id}
                  id={option.id}
                  label={option.label}
                  checked={selectedFirstYearOptions.includes(option.id)}
                  onChange={handleFirstYearOptionChange}
                />
              ))}
            </div>
          )}

          <Button
            id="masters"
            onClick={toggleShow}
            showArrowDown={showStates["masters"]}
          >
            Application for masters students
          </Button>
          {showStates["masters"] && (
            <div className="my-2">
              {mastersOptions.map((option) => (
                <MastersOptionCheckBox
                  key={option.id}
                  lable={option.lable}
                  checked={selectedMastersOptions.includes(option.id)}
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
                <FirstYearOptionCheckbox
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
                <TotalEnrollmentSizeOptionCheckBox
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
                <SpecializedMissionOptionCheckBox
                  key={option}
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