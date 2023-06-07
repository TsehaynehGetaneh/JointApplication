import React, { useState, useEffect } from 'react';
import ApplicantNav from '@/components/ApplicantNav';
import Left from '@/components/applicant/Left';
import MyUniversities from '@/components/applicant/common/MyUniversities';

function Index() {
 
  return (
    <div className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 lg:p-12">
      <ApplicantNav />
      <Left Children={<MyUniversities />} title="My Universities" />
    </div>
  );
}

export default Index;
