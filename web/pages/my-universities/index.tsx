'use client'

import React, { useState, useEffect } from 'react';
import HelpSection from '@/components/applicant/common/HelpSection';
import { NextPage } from 'next';
import ApplicantNav from '@/components/applicant/common/ApplicantNav';
import MyUniversities from '@/components/applicant/my-universities/MyUniversities';

type ShowState = Record<string, boolean>;

const Myuniversity: NextPage<{}> = () => {


  return (
    <div className="relative w-full min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-2 lg:p-3">
      <div className="w-full">
        <ApplicantNav />
      </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div>
                  <MyUniversities />
                </div>
          <HelpSection />
        </div>
    </div>
  );
};

export default Myuniversity;
