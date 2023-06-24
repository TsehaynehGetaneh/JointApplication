import React, { useState } from 'react';
import { Formik, Field, ErrorMessage, Form, FieldArray } from 'formik';
import { FileInputProps, InputFieldProps, StudentApplicationFormValues, validationSchema } from '@/types/applicant';
import ReactPaginate from 'react-paginate';

const items=[1,2,3,4,5,6,7,8,910]

const InputField: React.FC<InputFieldProps> = ({ name, label, type, placeholder }) => (
  <div className="mb-4">
    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor={name}>
      {label}:
    </label>
    <Field
      className="border rounded w-full py-2 px-3 text-grey-darker"
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
    />
    <ErrorMessage name={name} component="div" className="text-red-500" />
  </div>
);

const FileInput: React.FC<FileInputProps> = ({ name, label }) => (
  <div className="mb-4">
    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor={name}>
      {label}:
    </label>
    <Field className="border py-2 px-3" type="file" name={name} id={name} />
    <ErrorMessage name={name} component="div" className="text-red-500" />
  </div>
);

const StudentApplicationForm: React.FC = () => {
  const initialValues: StudentApplicationFormValues = {
    user: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      region: '',
      zip: '',
      country: '',
    },
    highSchool: {
      name: '',
      city: '',
      region: '',
      graduationYear: 0,
    },
    transcript: {
      file: {
        data: '',
        contentType: '',
      },
    },
    testScore: {
      Grade_8: 0,
      Grade_12: 0,
    },
    essay: {
      essay: '',
    },
    recommendations: [],
    payment: {
      amount: 0,
      status: '',
    },
    status: ''
  };
  const [itemOffset, setItemOffset] = useState(0);

  const handleSubmit = (values: StudentApplicationFormValues) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <div className="w-full bg-grey-500">
      <div className="container mx-auto py-8">
        <div className="w-[80%] mx-auto  rounded shadow">
          <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">
            Student Application
          </div>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form name="student_application" id="student_application">
              <div className="py-4 px-8">
                <InputField name="firstName" label="First Name" type="text" placeholder="Enter First Name" />
                <InputField name="lastName" label="Last Name" type="text" placeholder="Enter Last Name" />
                <InputField name="email" label="Email" type="text" placeholder="Enter Email" />
                <InputField name="phone" label="Phone" type="text" placeholder="Enter Phone" />
                <InputField name="address.street" label="Street" type="text" placeholder="Enter Street" />
                <InputField name="address.city" label="City" type="text" placeholder="Enter City" />
                <InputField name="address.region" label="region" type="text" placeholder="Enter region" />
                <InputField name="address.zip" label="ZIP" type="text" placeholder="Enter ZIP" />
                <InputField name="address.country" label="Country" type="text" placeholder="Enter Country" />
                <InputField name="highSchool.name" label="High School Name" type="text" placeholder="Enter High School Name" />
                <InputField name="highSchool.city" label="High School City" type="text" placeholder="Enter High School City" />
                <InputField name="highSchool.region" label="High School region" type="text" placeholder="Enter High School region" />
                <InputField name="highSchool.graduationYear" label="Graduation Year" type="number" placeholder="Enter Graduation Year" />
                <FileInput name="transcript.file.data" label="Transcript File" />
                <InputField name="transcript.file.contentType" label="Transcript File Content Type" type="text" placeholder="Enter Transcript File Content Type" />
                <InputField name="testScore.Grade_8" label="Grade 8" type="number" placeholder="Enter Grade 8" />
                <InputField name="testScore.Grade_12" label="Grade 12" type="number" placeholder="Enter Grade 12" />
                <InputField name="essay.essay" label="Essay" type="text" placeholder="Enter Essay" />
                
                {/* Recommendations */}
                <div>
                  <label className="block text-grey-darker text-sm font-bold mb-2">Recommendations:</label>
                  <FieldArray name="recommendations">
                    {(arrayHelpers) => (
                      <div>
                        {arrayHelpers.form.values.recommendations.map((_: any, index: number) => (
                          <div key={index} className="mb-4">
                            <InputField name={`recommendations[${index}].name`} label="Name" type="text" placeholder="Enter Name" />
                            <InputField name={`recommendations[${index}].relationship`} label="Relationship" type="text" placeholder="Enter Relationship" />
                            <InputField name={`recommendations[${index}].email`} label="Email" type="text" placeholder="Enter Email" />
                            {index > 0 && (
                              <button type="button" onClick={() => arrayHelpers.remove(index)} className="text-red-500">
                                Remove Recommendation
                              </button>
                            )}
                          </div>
                        ))}
                        <button type="button" onClick={() => arrayHelpers.push({ name: '', relationship: '', email: '' })}>
                          Add Recommendation
                        </button>
                      </div>
                    )}
                  </FieldArray>
                </div>
                <InputField name="payment.amount" label="Payment Amount" type="number" placeholder="Enter Payment Amount" />
                <InputField name="payment.status" label="Payment Status" type="text" placeholder="Enter Payment Status" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default StudentApplicationForm;
