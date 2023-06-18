import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import CustomFileInput from './CustomFileInput';

interface FormValues {
  essay: string;
  file: File | null;
}

const essaySchema = Yup.object().shape({
  essay: Yup.string().required(),
  file: Yup.mixed().required('A file is required'),
});

const PersonalEssay: React.FC = () => {
  const [charCount, setCharCount] = useState(0);

  const onTextChange = (value: string) => {
    const text = value.replace(/(<([^>]+)>)/gi, '');
    setCharCount(text.length);
  };

  const initialValues: FormValues = {
    essay: '',
    file: null,
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className="bg-white shadow-md rounded-md py-5 px-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Personal Essay</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={essaySchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isSubmitting, setFieldValue }) => (
          <Form>
            <div className="mb-4 w-[530px]">
              <label className="block text-gray-700 font-bold mb-2">
                Essay <span className="text-red-500">*</span>
              </label>
              <ReactQuill
                value={values.essay}
                onChange={(value) => {
                  setFieldValue('essay', value);
                  onTextChange(value);
                }}
                className="bg-white w-full h-64 rounded shadow-sm focus:outline-none"
              />
              <div className="flex justify-between mx-2">
                <p className={charCount > 650 ? 'text-red-500' : ''}>
                  Character Count: {charCount}
                </p>
                <p className=" text-right">Max: 650 characters</p>
              </div>
              <ErrorMessage
                name="essay"
                component="p"
                className="text-red-500 text-xs italic "
              />
            </div>

            <div className="mb-4">
              <CustomFileInput
                field={{
                  name: 'file',
                  value: values.file,
                  onChange: (event) => setFieldValue('file', event.currentTarget.files?.[0] || null),
                  onBlur: () => setFieldValue('file', values.file),
                }}
                form={{
                  setFieldValue,
                  setFieldTouched: () => {},
                }}
                label="If you want to send from you device choose files like (Text, MS Word, or PDF)"
              />
              <ErrorMessage
                name="file"
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
