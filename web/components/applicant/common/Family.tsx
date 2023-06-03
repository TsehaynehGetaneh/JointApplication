'use client'
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';


//Validation Schema
const validationSchema = yup.object().shape({
  maritalStatus: yup.string().required('Marital status is required'),
  permanentHome: yup.string().required('Permanent home is required'),
  hasChildren: yup.string().required('Please select an option'),
  parent1Type: yup.string().required('Parent 1 type is required'),
  parent1Living: yup.string().required('Please select an option'),
  // parent2Type: yup.string().when('permanentHome', {
  //   is: (val) => val === 'both' || val === 'other',
  //   then: yup.string().required('Parent 2 type is required'),
  // }),
  // parent2Living: yup.string().when('parent2Type', {
  //   is: (val) => val === 'mother' || val === 'father',
  //   then: yup.string().required('Please select an option'),
  // }),
  prefix: yup.string(),
  firstName: yup.string().required('First name is required'),
  middleInitial: yup.string().max(1, 'Please enter a valid initial'),
  lastName: yup.string().required('Last name is required'),
  formerLastName: yup.string(),
  suffix: yup.string(),
});


type FormData = {
  maritalStatus: string;
  permanentHome: string;
  hasChildren: string;
  parent1Type: string;
  parent1Living: string;
  parent2Type: string;
  parent2Living: string;
  prefix?: string;
  firstName: string;
  middleInitial?: string;
  lastName: string;
  formerLastName?: string;
  suffix?: string;
};


const Family: React.FC = () => {

  const router = useRouter()

  const handleContinue = () => {
    // e.preventDefault()
    router.push('education')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center  p-4 sm:p-6 md:p-8 lg:p-12">
        <form className="flex flex-col items-center text-black gap-y-5" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="w-full">
            <label htmlFor="marital-status">Parents' marital status (relative to each other)*</label>
            <select id="marital-status" className="w-full rounded-full border-2 h-12 px-3" {...register('maritalStatus')}>
              <option value="">Choose an option</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
              <option value="separated">Separated</option>
            </select>
            {errors.maritalStatus && <p className="text-red-500">{errors.maritalStatus.message}</p>}
          </div>
          <div className="w-full ">
            <label htmlFor="permanent-home">With whom do you make your permanent home?*</label>
            <select id="permanent-home" className="w-full rounded-full border-2 h-12 px-3" {...register('permanentHome')}>
              <option value="">Choose an option</option>
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="both">Both</option>
              <option value="other">Other</option>
            </select>
            {errors.permanentHome && <p className="text-red-500">{errors.permanentHome.message}</p>}
          </div>
          <div>
            <p>Do you have any children?</p>
            <div className="flex items-center gap-x-5">
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="yes" value="true" {...register('hasChildren')} />
              <label htmlFor="no">No</label>
              <input type="radio" id="no" value="false" {...register('hasChildren')} />
            </div>
            {errors.hasChildren && <p className="text-red-500">{errors.hasChildren.message}</p>}
          </div>
          <div className="w-full">
            <label htmlFor="parent1-type">Parent 1 type*</label>
            <select id="parent1-type" className="w-full rounded-full border-2 h-12 px-3" {...register('parent1Type')}>
              <option value="">Choose an option</option>
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="limited-info">I have limited information about this parent</option>
            </select>
            {errors.parent1Type && <p className="text-red-500">{errors.parent1Type.message}</p>}
          </div>
          <div>
            <p>Is parent 1 living?</p>
            <div className="flex items-center gap-x-5">
              <label htmlFor="parent1-living-yes">Yes</label>
              <input type="radio" id="parent1-living-yes" value="true" {...register('parent1Living')} />
              <label htmlFor="parent1-living-no">No</label>
              <input type="radio" id="parent1-living-no" value="false" {...register('parent1Living')} />
              {errors.parent1Living && <p className="text-red-500">{errors.parent1Living.message}</p>}
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="parent2-type">Parent 2 type*</label>
            <select id="parent2-type" className="w-full rounded-full border-2 h-12 px-3" {...register('parent2Type')}>
              <option value="">Choose an option</option>
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="limited-info">I have limited information about this parent</option>
            </select>
            {errors.parent2Type && <p className="text-red-500">{errors.parent2Type.message}</p>}
          </div>
          <div>
            <p>Is parent 2 living?</p>
            <div className="flex items-center gap-x-5">
              <label htmlFor="parent2-living-yes">Yes</label>
              <input type="radio" id="parent2-living-yes" value="true" {...register('parent2Living')} />
              <label htmlFor="parent2-living-no">No</label>
              <input type="radio" id="parent2-living-no" value="false" {...register('parent2Living')} />
            </div>
            {errors.parent2Living && <p className="text-red-500">{errors.parent2Living.message}</p>}
          </div>
          <div>
            <button onClick={handleContinue} type="submit" className="bg-blue-500 text-white rounded-full px-8 py-3">Continue</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Family;
