import ApplicantNav from '@/components/ApplicantNav'
import SearchCollegeOrUni from '@/components/find-college/SearchCollegeOrUni'
import React from 'react'

function index() {
  return (
    <div className="flex min-h-screen flex-col items-center  p-4 sm:p-6 md:p-8 lg:p-12">
      <ApplicantNav />
      <SearchCollegeOrUni />
    </div>
  )
}

export default index