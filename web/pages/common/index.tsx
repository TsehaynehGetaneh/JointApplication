import ApplicantNav from '@/components/ApplicantNav'
import Left from '@/components/applicant/Left'
import Profile from '@/components/applicant/common/profile/Profile'
import React from 'react'

function Common() {
  return (
    <div className="flex min-h-screen flex-col items-center  p-4 sm:p-6 md:p-8 lg:p-12">
      <ApplicantNav />
        <Left Children={<Profile />} title={'Profile'}/>
    </div>
  )
}

export default Common