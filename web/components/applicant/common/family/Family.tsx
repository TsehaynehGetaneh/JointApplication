import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';

type FormValues = {
  firstName: string;
  preferredName: string;
  middleName: string;
  lastName: string;
  otherNames: string;
  dob: string;
  permanentAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type ProfileFormProps = {
  onSubmit: (values: FormValues) => void;
};

const Family: React.FC<ProfileFormProps> = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    dob: Yup.date().required('Date of birth is required'),
    permanentAddress: Yup.string().required('Permanent address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State/Province/Region is required'),
    postalCode: Yup.string().required('Postal/ZIP code is required'),
    country: Yup.string().required('Country is required'),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: 'Ebisa',
      preferredName: 'No',
      middleName: '',
      lastName: 'Dugo',
      otherNames: 'No',
      dob: '2005-11-30',
      permanentAddress: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded-md p-6">
      <InputField label="Legal first/given name*" id="firstName" formikProps={formik} />
      <InputField label="Last/family/surname*" id="lastName" formikProps={formik} />
      <InputField label="Permanent home address*" id="permanentAddress" formikProps={formik} />
      <InputField label="City*" id="city" formikProps={formik} />
      <InputField label="State/Province/Region*" id="state" formikProps={formik} />
      <InputField label="Postal/ZIP code*" id="postalCode" formikProps={formik} />
      <InputField label="Country*" id="country" formikProps={formik} />
      <button type="submit" className="bg-blue-500 text-white rounded-full px-8 py-3 mt-4">
        Save
      </button>
    </form>
  );
};

export default Family;
