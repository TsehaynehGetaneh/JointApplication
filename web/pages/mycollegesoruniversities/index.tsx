import React, { useState, useEffect } from 'react';
import ApplicantNav from '@/components/ApplicantNav';
import Left from '@/components/applicant/Left';
import MyUniversities from '@/components/applicant/common/MyUniversities';

function Index() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:9000/api/v1/universities');
      const jsonData = await response.json();
      setJsonData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 lg:p-12">
      <ApplicantNav />
      <Left Children={<MyUniversities />} title="My Universities" />
      {jsonData && <p>{jsonData}</p>}
    </div>
  );
}

export default Index;
