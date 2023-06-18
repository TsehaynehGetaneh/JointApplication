import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { educationSchema } from '../../../utils/educationSchema'
import router from 'next/router';


// Define the type of form values
interface EducationFormValues {
  name: string;
  city: string;
  region: string;
  didGraduate: boolean;
  options: {
    graduateEarly: boolean;
    graduateLate: boolean;
    takeTimeOff: boolean;
    takeGapYear: boolean;
    noChange: boolean;
  };
  otherSchools: string;
  colleges: string;
  hasHonors: boolean;
  futurePlans: string;
  careerInterest: string;
  highestDegree: string;
}


const Education: React.FC = () => {


  const initialValues: EducationFormValues = {
    name: '',
    city: '',
    region: '',
    didGraduate: false,
    options: {
      graduateEarly: false,
      graduateLate: false,
      takeTimeOff: false,
      takeGapYear: false,
      noChange: false,
    },
    otherSchools: '',
    colleges: '',
    hasHonors: false,
    futurePlans: '',
    careerInterest: '',
    highestDegree: '',
  };
  const handleContinue = () => {
    // e.preventDefault()
    router.push('activities')
  }


  // Define the submit handler function
  const onSubmitHandler = (values: EducationFormValues, 
    { resetForm }: FormikHelpers<EducationFormValues>) => {
    console.log(values);
    resetForm();
  };
  return (


    <div className="bg-white shadow-md rounded-md py-5 px-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Education</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={educationSchema}
        onSubmit={onSubmitHandler}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Name of Secondary/High School <span className='text-red-600'>*</span>
              </label>
              <Field
                type="text"
                name="name"
                className={
                  "w-full px-3 py-2 text-gray-700 border rounded" +
                  (errors.name && touched.name ? " border-red-500" : "")
                }
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                City <span className='text-red-600'>*</span>
              </label>
              <Field
                type="text"
                name="city"
                className={
                  "w-full px-3 py-2 text-gray-700 border rounded" +
                  (errors.city && touched.city ? " border-red-500" : "")
                }
              />
              <ErrorMessage
                name="city"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Region <span className='text-red-600'>*</span>
              </label>
              <Field
                type="text"
                name="region"
                className={
                  "w-full px-3 py-2 text-gray-700 border rounded" +
                  (errors.region && touched.region ? " border-red-500" : "")
                }
              />
              <ErrorMessage
                name="region"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Other Secondary/High Schools
                If you have attended any secondary/high schools not 
                listed in the previous section, please indicate the 
                number of schools. <span className='text-red-600'>*</span>
              </label>
              <div>
                <Field
                  type="radio"
                  name="otherSchools"
                  value="0"
                  className="ml-4 mr-2 leading-tight"
                />
                <span className="text-gray-700 text-sm">0</span>
              </div>
              <div>
                <Field
                  type="radio"
                  name="otherSchools"
                  value="1"
                  className="ml-4 mr-2 leading-tight"
                />
                <span className="text-gray-700 text-sm">1</span>
              </div>
              <div>
                <Field
                  type="radio"
                  name="otherSchools"
                  value="2"
                  className="ml-4 mr-2 leading-tight"
                />
                <span className="text-gray-700 text-sm">2</span>
              </div>
              <div>
                <Field
                  type="radio"
                  name="otherSchools"
                  value="3"
                  className="ml-4 mr-2 leading-tight"
                />
                <span className="text-gray-700 text-sm">3</span>
              </div>
              <ErrorMessage
                name="otherSchools"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Name of Secondary/High School <span className='text-red-600'>*</span>
              </label>
              <Field
                type="text"
                name="name"
                className={
                  "w-full px-3 py-2 text-gray-700 border rounded" +
                  (errors.name && touched.name ? " border-red-500" : "") +
                  " focus:outline-none focus:shadow-outline"
                }
                placeholder="Enter school name"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
          
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-3">
                Honors
                <br />
                Do you wish to report any honors related to your academic 
                achievements beginning with the ninth grade or national 
                equivalent? <span className='text-red-600'>*</span>
              </label>
              <div className="flex items-center mb-2">
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="hasHonors"
                    value="true"
                    className="form-radio h-5 w-5 text-gray-600"
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="hasHonors"
                    value="false"
                    className="form-radio h-5 w-5 text-gray-600"
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
              <ErrorMessage
                name="hasHonors"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Future Plans <span className='text-red-600'>*</span>
              </label>
              <Field
                name="futurePlans"
                as="textarea"
                rows="4"
                className="block w-full py-2 px-3 border border-gray-300 
                bg-white rounded-md shadow-sm focus:outline-none 
                focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="futurePlans"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Career interest <span className='text-red-600'>*</span>
              </label>
              <Field
                name="careerInterest"
                as="select"
                className="block w-full py-2 px-3 border border-gray-300 
                bg-white rounded-md shadow-sm focus:outline-none 
                focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">- Choose an option -</option>
                <option value="Accounting">Accounting</option>
                <option value="Engineering">Engineering</option>
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage
                name="careerInterest"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700               font-bold mb-2">Highest degree <span className='text-red-600'>*</span></label>
              <Field
                name="highestDegree"
                as="select"
                className="block w-full py-2 px-3 border border-gray-300 
                bg-white rounded-md shadow-sm focus:outline-none 
                focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">- Choose an option -</option>
                <option value="Bachelor’s (BA, BS)">Bachelor’s (BA, BS)</option>
                <option value="Master’s (MA, MS)">Master’s (MA, MS)</option>
                <option value="Doctoral">Doctoral</option>
                <option value="Post-Baccalaureate or professional certificate">
                  Post-Baccalaureate or professional certificate
                </option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage
                name="highestDegree"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
              onClick={handleContinue}
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white 
                font-bold py-2 px-4 rounded"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Continue'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Education;


