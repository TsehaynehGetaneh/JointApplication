'use client'


import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import router from 'next/router';


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
        <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded-md p-6">
            {/* <PersonalEssay/> */}

            <div className="mb-6">
                <label htmlFor="firstName" className="block font-bold mb-2">Legal first/given name*</label>
                <input
                    type="text"
                    id="firstName"
                    className="border border-gray-400 p-2 w-full focus:outline-none focus:border-blue-600"
                    {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
                )}
            </div>

            <div className="mb-6">
                <label htmlFor="lastName" className="block font-bold mb-2">Last/family/surname*</label>
                <input
                    type="text"
                    id="lastName"
                    className="border border-gray-400 p-2 w-full focus:outline-none focus:border-blue-600"
                    {...formik.getFieldProps('lastName')}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
                )}
            </div>

            <div className="mb-6">
                <label htmlFor="permanentAddress" className="block font-bold mb-2">Permanent home address*</label>
                <input
                    type="text"
                    id="permanentAddress"
                    className="border border-gray-400 p-2 w-full focus:outline-none focus:border-blue-600"
                    {...formik.getFieldProps('permanentAddress')}
                />
                {formik.touched.permanentAddress && formik.errors.permanentAddress && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.permanentAddress}</p>
                )}
            </div>

            <div className="mb-6">
                <label htmlFor="city" className="block font-bold mb-2">City*</label>
                <input
                    type="text"
                    id="city"
                    className="border border-gray-400 p-2 w-full focus:outline-none focus:border-blue-600"
                    {...formik.getFieldProps('city')}
                />
                {formik.touched.city && formik.errors.city && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
                )}
            </div>

            <div className="mb-6">
                <label htmlFor="state" className="block font-bold mb-2">State/Province/Region*</label>
                <input
                    type="text"
                    id="state"
                    className="border border-gray-400 p-2 w-full focus:outline-none focus:border-blue-600"
                    {...formik.getFieldProps('state')}
                />
                {formik.touched.state && formik.errors.state && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.state}</p>
                )}
            </div>

            <div className="mb-6">
                <label htmlFor="postalCode" className="block font-bold mb-2">Postal/ZIP code*</label>
                <input
                    type="text"
                    id="postalCode"
                    className="border border-gray-400 p-2 w-full focus:outline-none focus:border-blue-600"
                    {...formik.getFieldProps('postalCode')}
                />
                {formik.touched.postalCode && formik.errors.postalCode && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.postalCode}</p>
                )}
            </div>

            <div className="mb-6">
                <label htmlFor="region" className="block font-bold mb-2">Region*</label>
                <select
                    id="region"
                    className="border border-gray-400 p-2 w-full focus:outline-none focus:border-blue-600"
                    {...formik.getFieldProps('region')}
                >
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




