'use client'

import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FaGoogleDrive } from 'react-icons/fa';
import * as gapi from 'googleapis';



interface FormValues {
  essay: string;
}


interface Window {
  gapi: any;
  google: any;
}



const essaySchema = Yup.object().shape({
  essay: Yup.string().required().min(250).max(650),
});


const PersonalEssay: React.FC = () => {

  const [wordCount, setWordCount] = useState(0);
  const [fileId, setFileId] = useState("");
  // const [formData,setFormData]=useState({email:"",password:""}) 

  // const handleInputChange=(e)=>{
  //     const {name,value}=e.target
  //     setFormData((prevFormData)=>({...prevFormData,[name]:value}))
  // }
  type QuillValueStatic = string;


  const onTextChange = (value: QuillValueStatic) => {
    const text = value.replace(/(<([^>]+)>)/gi, "");
    const wordCount = text.trim().split(/\s+/).length;
    setWordCount(wordCount);
  };


  const onFileSelect = (data: any) => {
    if (data.action === "picked") {
      setFileId(data.docs[0].id);
    }
  };

  // const openPicker = () => {
  //   window.gapi.load("auth");
  //   window.gapi.load("picker");
  //   const picker = window.google.picker;
  //   const oauthToken = window.gapi.auth.getToken().access_token;
  //   const view = new picker.View(picker.ViewId.DOCS);
  //   view.setMimeTypes("application/pdf");
  //   const pickerBuilder = new picker.PickerBuilder()
  //     .enableFeature(picker.Feature.NAV_HIDDEN)
  //     .enableFeature(picker.Feature.MULTISELECT_ENABLED)
  //     .setAppId(process.env.REACT_APP_GOOGLE_APP_ID)
  //     .setOAuthToken(oauthToken)
  //     .addView(view)
  //     .setDeveloperKey(process.env.REACT_APP_GOOGLE_API_KEY)
  //     .setCallback(onFileSelect);
  //   const pickerInstance = pickerBuilder.build();
  //   pickerInstance.setVisible(true);
  // };


  const initialValues: FormValues = {
    essay: '',
  };


  const onSubmitHandler = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    console.log(values);
    resetForm();
    const formData = new FormData();
    formData.append("essay", values.essay);
    formData.append("fileId", fileId);
    const response = await fetch("/api/submit-essay", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  };


  return (
    <div className="container mx-auto px-4 w-full">
      <h1 className="text-2xl font-bold mb-4">Personal Essay</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={essaySchema}
        onSubmit={onSubmitHandler}
      >
        {({ values, errors, touched, isSubmitting, setFieldValue }) => (
          <Form>
            <div className="mb-4 ">
              <label className="block text-gray-700 font-bold mb-2 ">
                Essay*
              </label>
              {/* <p> Upload from Google Drive</p> */}
              {/* <button type="button" onClick={openPicker} className='rounded-md bg-blue-300'>
                <FaGoogleDrive />
              </button> */}
              <ReactQuill
                value={values.essay}
                onChange={(value) => {
                  setFieldValue("essay", value);
                  onTextChange(value);
                }}
                className="bg-white w-full rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <div className='flex justify-between'>
                <p>Word Count: {wordCount}</p>
                <p >
                  Min: 250 / Max: 6500/650 words
                </p>
              </div>
              <label htmlFor="doc" className="flex items-center p-3 gap-2 rounded-3xl border border-gray-300 border-dashed bg-gray-50 cursor-pointer">
                <svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <div className="space-y-2 ">
                  <h4 className="text-base font-semibold text-gray-700">Upload a file</h4>
                </div>
                <input type="file" id="doc" name="doc" accept="pdf,txt,doc" hidden />
              </label>
              <ErrorMessage
                name="essay"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalEssay;
