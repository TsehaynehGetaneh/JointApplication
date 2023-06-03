import * as yup from 'yup';

export const educationSchema = yup.object().shape({
  school: yup
    .string()
    .required()
    .matches(/^[A-Za-z\s]+$/, 'School name can only contain letters and spaces'),
  dateOfEntry: yup
    .string()
    .required()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in the format YYYY-MM-DD'),
  isBoardingSchool: yup.boolean().required(),
  didGraduate: yup.boolean().required(),
  options: yup
    .object()
    .shape({
      graduateEarly: yup.boolean(),
      graduateLate: yup.boolean(),
      takeTimeOff: yup.boolean(),
      takeGapYear: yup.boolean(),
      noChange: yup.boolean(),
    })
    .test(
      'at-least-one-option',
      'Select at least one option',
      (value) =>
        value &&
        (value.graduateEarly ||
          value.graduateLate ||
          value.takeTimeOff ||
          value.takeGapYear ||
          value.noChange)
    ),
  otherSchools: yup.number().min(0).max(3),
  colleges: yup.number().min(0).max(3),
  graduatingClassSize: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, 'Class size must be a numeric value')
    .min(1, 'Class size must be at least 1')
    .max(1000, 'Class size cannot exceed 1000'),
  classRankReporting: yup
    .string()
    .required()
    .oneOf(['', 'Exact', 'Approximate'], 'Invalid class rank reporting'),
  gpaScaleReporting: yup
    .string()
    .required()
    .oneOf(['', '4.0', '5.0', '100'], 'Invalid GPA scale reporting'),
  hasHonors: yup.boolean().required(),
  careerInterest: yup
    .string()
    .oneOf([
      '',
      'Accounting',
      'Engineering',
      'Education',
      'Finance',
      'Healthcare',
      'IT',
      'Marketing',
      'Other',
    ])
    .required(),
  highestDegree: yup
    .string()
    .oneOf([
      '',
      'Bachelor’s (BA, BS)',
      'Master’s (MA, MS)',
      'Doctoral',
      'Post-Baccalaureate or professional certificate',
      'Other',
    ])
    .required(),
  futurePlans: yup.string().required(),
});
