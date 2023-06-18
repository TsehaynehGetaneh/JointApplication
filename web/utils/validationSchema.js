import * as yup from 'yup';


let validationSchema = yup.object().shape({
  maritalStatus: yup.string().required('Marital status is required'),
  permanentHome: yup.string().required('Permanent home is required'),
  hasChildren: yup.string().required('Please select an option'),
  parent1Type: yup.string().required('Parent 1 type is required'),
  parent1Living: yup.string().required('Please select an option'),
  parent2Type: yup.string().when('permanentHome', {
    is: (val) => val === 'both' || val === 'other',
    then: yup.string().required('Parent 2 type is required'),
  }),
  parent2Living: yup.string().when('parent2Type', {
    is: (val) => val === 'mother' || val === 'father',
    then: yup.string().required('Please select an option'),
  }),
  siblingsNumber: yup.number().required('Please complete this required question'),
  progression: yup.array().min(1, 'Please select at least one option'),
  selfReportScores: yup.string(),
  internationalApplicant: yup.string(),
  activities: yup.string(),
  numSchoolsAttended: yup.string(),
  numCollegesAttended: yup.string(),
  graduatingClassSize: yup.number().required('Please enter an approximate graduating class size'),
  classRank: yup.string().required('Please select a class rank reporting option'),
  gpaScaleReporting: yup.string().required('Please select a GPA scale reporting option'),
  prefix: yup.string(),
  firstName: yup.string().required('First name is required'),
  middleInitial: yup.string().max(1, 'Please enter a valid initial'),
  lastName: yup.string().required('Last name is required'),
  formerLastName: yup.string(),
  suffix: yup.string(),
  numCourses: yup.string().required('Please select an option'),
  courseScheduling: yup.string().required('Please select an option'),
  hasHonors: yup.string().required('Please select an option'),
  honorsDescription: yup.string().when('hasHonors', {
    is: (val) => val === 'true',
    then: yup.string().required('Please describe your honors'),
  }),
  careerInterest: yup.string(),
  highestDegree: yup.string().required('Please select an option'),
  futurePlans: yup.string().required('Please describe your future plans'),
});

[...Array(6)].forEach((_, i) => {
  validationSchema = validationSchema.shape({
    [`course${i}Name`]: yup.string().when('numCourses', {
      is: (val) => val && parseInt(val) > i,
      then: yup.string().required(`Course ${i + 1} name is required`),
    }),
    [`course${i}Grade`]: yup.string().when('numCourses', {
      is: (val) => val && parseInt(val) > i,
      then: yup.string().required(`Course ${i + 1} grade is required`),
    }),
  });
});

export default validationSchema;
