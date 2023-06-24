import * as Yup from 'yup';

export interface StudentApplicationFormValues {
  user: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    region: string;
    zip: string;
    country: string;
  };
  highSchool: {
    name: string;
    city: string;
    region: string;
    graduationYear: number;
  };
  transcript: {
    file: {
      data: string;
      contentType: string;
    };
  };
  testScore: {
    Grade_8: number;
    Grade_12: number;
  };
  essay: {
    essay: string;
  };
  recommendations: {
    name: string;
    relationship: string;
    email: string;
  }[];
  payment: {
    amount: number;
    status: string;
  };
  status: string;
}


export const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  address: Yup.object().shape({
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    region: Yup.string().required('region is required'),
    zip: Yup.string().required('ZIP is required'),
    country: Yup.string().required('Country is required'),
  }),
  highSchool: Yup.object().shape({
    name: Yup.string().required('High School Name is required'),
    city: Yup.string().required('High School City is required'),
    region: Yup.string().required('High School region is required'),
    graduationYear: Yup.number().required('Graduation Year is required'),
  }),
  transcript: Yup.object().shape({
    file: Yup.object().shape({
      data: Yup.mixed().required('Transcript File is required'),
      contentType: Yup.string().required('Transcript File Content Type is required'),
    }),
  }),
  testScore: Yup.object().shape({
    Grade_8: Yup.number().required('Grade 8 is required'),
    Grade_12: Yup.number().required('Grade 12 is required'),
  }),
  essay: Yup.object().shape({
    essay: Yup.string().required('Essay is required'),
  }),
  recommendations: Yup.array().of(
    Yup.object().shape({
      name: Yup.string(),
      relationship: Yup.string(),
      email: Yup.string(),
    })
  ),
  payment: Yup.object().shape({
    amount: Yup.number(),
    status: Yup.string(),
  }),
});

export interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export interface FileInputProps {
  name: string;
  label: string;
}
