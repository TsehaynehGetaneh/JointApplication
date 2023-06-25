'use client'


import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import router from 'next/router';
import InputField from './Input';


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


function Profile() {
    const [showButtons, setShowButtons] = useState<{ profile: boolean }>({ profile: false })
    const [showForm, setShowForm] = useState(false);

    const handleClick = (id: keyof typeof showButtons) => {
        setShowButtons(prevState => (
            { ...prevState, [id]: !prevState[id] }
        ));
    };
    const handleContinue = () => {
        // e.preventDefault()
        router.push('family')
      }
    
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
        onSubmit: (values) => {
            // Handle form submission logic here
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded-md py-5 px-[7rem]">
            {/* Input fields */}

            <InputField label="Legal first/given name*" id="firstName" formikProps={formik} />
            <InputField label="Last/family/surname*" id="lastName" formikProps={formik} />
            <InputField label="Permanent home address*" id="permanentAddress" formikProps={formik} />
            <InputField label="City*" id="city" formikProps={formik} />
            <InputField label="State/Province/Region*" id="state" formikProps={formik} />
            <InputField label="Postal/ZIP code*" id="postalCode" formikProps={formik} />
            <InputField label="Country*" id="country" formikProps={formik} />

            {/* region option */}

            <div className="mb-6">
                <label htmlFor="region" className="block font-bold mb-2">Region*</label>
                <select
                    id="region"
                    className="border border-z-400 p-2 w-full focus:outline-none focus:border-blue-600"
                    {...formik.getFieldProps('region')}>
                    <option value="">Select a region</option>
                    <option value="addis-ababa">Addis Ababa</option>
                    <option value="afar">Afar</option>
                    <option value="amhara">Amhara</option>
                    <option value="benishangul-gumuz">Benishangul-Gumuz</option>
                    <option value="dire-dawa">Dire Dawa</option>
                    <option value="gambela">Gambela</option>
                    <option value="harari">Harari</option>
                    <option value="oromia">Oromia</option>
                    <option value="sidama">Sidama</option>
                    <option value="somal">Somal</option>
                    <option value="southern-nations-nationalities-and-peoples">Southern Nations, Nationalities, and Peoples</option>
                    <option value="tigray">Tigray</option>
                </select>
                {formik.touched.country && formik.errors.country && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.country}</p>
                )}
            </div>
            <button onClick={handleContinue} type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none">
                Continue to next section
            </button>
        </form>
    );
}


export default Profile;




