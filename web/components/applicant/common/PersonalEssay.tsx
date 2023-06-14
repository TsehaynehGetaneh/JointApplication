import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FaGoogleDrive } from 'react-icons/fa';

interface FormValues {
  essay: string;
}

const essaySchema = Yup.object().shape({
  essay: Yup.string().required().min(250).max(650),
});

const PersonalEssay: React.FC = () => {
  const [wordCount, setWordCount] = useState(0);
  const [fileId, setFileId] = useState("");

  const onTextChange = (value: string) => {
    const text = value.replace(/(<([^>]+)>)/gi, "");
    const wordCount = text.trim().split(/\s+/).length;
    setWordCount(wordCount);
  };

  const onFileSelect = (data: any) => {
    if (data.action === "picked") {
      setFileId(data.docs[0].id);
    }
  };

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
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Essay*
              </label>
              <ReactQuill
                value={values.essay}
                onChange={(value) => {
                  setFieldValue("essay", value);
                  onTextChange(value);
                }}
                className="bg-white w-full rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <div className="flex justify-between">
                <p>Word Count: {wordCount}</p>
                <p>
                  Min: 250 / Max: 6500/650 words
                </p>
              </div>
              <ErrorMessage
                name="essay"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="doc" className="flex items-center space-x-2 cursor-pointer">
                <FaGoogleDrive className="h-5 w-5 text-blue-500" />
                <span>Upload a file</span>
                <input type="file" id="doc" name="doc" accept="pdf,txt,doc" hidden />
              </label>
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
