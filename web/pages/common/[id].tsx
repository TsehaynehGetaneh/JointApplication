import ApplicantNav from '@/components/ApplicantNav'
import Left from '@/components/applicant/Left'
import Education from '@/components/applicant/common/Education'
import React from 'react'
import { useRouter } from 'next/router'
import Family from '@/components/applicant/common/Family'
import PersonalEssay from '@/components/applicant/common/PersonalEssay'
import Profile from '@/components/applicant/common/profile/Profile'


function Others() {


  const router = useRouter()
  return (
    <div className="flex min-h-screen flex-col items-center  p-4 sm:p-6 md:p-8 lg:p-12">
      <ApplicantNav />
      {router.asPath.split('/')[2] === 'Profile'.toLocaleLowerCase() &&
        <Left Children={<Profile />} title={'Profile'} />}
      {router.asPath.split('/')[2] === 'Writing'.toLocaleLowerCase() &&
        <Left Children={<PersonalEssay />} title={'PersonalEssay'} />}
      {router.asPath.split('/')[2] === 'Family'.toLocaleLowerCase() &&
        <Left Children={<Family />} title={'Family'} />}
      {router.asPath.split('/')[2] === 'Education'.toLocaleLowerCase() &&
        <Left Children={<Education />} title={'Education'} />}
    </div>
  )
}

export default Others