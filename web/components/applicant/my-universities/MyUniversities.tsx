import Link from 'next/link';
import { useState } from 'react';
import UniversityInfo from './UniversityInfo';
import ReviewSubmit from './ReviewSubmit';
import Left from './Left';
import { useGetMyCollegesQuery } from '@/store/my-college/my-college-api';
import Lodding from '../common/Loading';

type ButtonItem = {
  label: string;
  onClick?: () => void; // Update the type of onClick
};

const MyUniversities: React.FC = () => {
  const [showUniversityInfo, setShowUniversityInfo] = useState<string | null>(null);
  const [showReviewSubmit, setShowReviewSubmit] = useState(false);

  const { data: colleges, isSuccess, isLoading, isError, error } = useGetMyCollegesQuery();

  if (isLoading) {
    return <Lodding />;
  }

  if (isError) {
    return <div>Error occurred while fetching colleges.</div>;
  }

  const handleShowUniversityInfo = (collegeId: string): (() => void) => {
    return () => {
      setShowUniversityInfo((prevCollegeId) => prevCollegeId === collegeId ? null : collegeId);
      setShowReviewSubmit(false);
    };
  };

  const handleShowReviewSubmit = (): (() => void) => {
    setShowReviewSubmit(true);
    return (): void => undefined;
  };

  return (
    <div className="container mx-auto py-8 flex bg-gray-100 gap-2">
      <div className="">
        <h3 className="mb-1 px-4 py-2 w-[200px] text-white border-0 border-transparent shadow bg-gray-800">
          My Universities
        </h3>
        {colleges && colleges.length > 0 ? (
          colleges.map((college) => (
            <Left
              key={college._id}
              label={college.name}
              buttons={[
                { label: 'College Information', onClick: handleShowUniversityInfo(college._id) },
                { label: 'Active Application' },
                { label: 'Review and Submit - Joint App', onClick: handleShowReviewSubmit },
              ]}
            />
          ))
        ) : (
          
          ''
        )}
      </div>
      {showUniversityInfo && !showReviewSubmit && colleges && colleges.length > 0 && (
        <div>
          {colleges.map((college) =>
            college._id === showUniversityInfo ? (
              <UniversityInfo
                collegeId={college._id}
                key={college._id}
                name={college.name}
                phone={college.phone}
                email={college.email}
                address={college.address}
                logoSrc={college.images.logo.url}
                websiteUrl={college.links}
                admissionsUrl={college.links}
                facebookUrl={college.links}
                instagramUrl={college.links}
                twitterUrl={college.links}
                youtubeUrl={college.links}
                applicationDeadlines={college.deadlines}
                applicationFees={college.applicationFees}
                recommendations={college.evaluations.recommendations}
                savesSchoolForms={college.evaluations.other.optional}
                additionalInformation={college.additionalInfo}
                writingRequirement={college.writingRequirements}
              />
            ) : null
          )}
        </div>
      )}
      {showReviewSubmit && <ReviewSubmit />}
      {!showUniversityInfo && !showReviewSubmit && (
        <div className="p-2">
          <h1 className="text-2xl font-bold mb-4">My Universities</h1>
          <p className="mb-4">
            In this tab, you will continue your application for each University, and you will:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Complete University-specific questions and supplements</li>
            <li>Invite and manage recommenders</li>
            <li>Submit your application!</li>
          </ul>
          <p className="mb-4">
            For more help in completing this tab, you may contact our{' '}
            <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
              Applicant Solution Center
            </Link>{' '}
            at any time to answer your questions.
          </p>
          <div className="flex justify-end">
            <Link href="/search" className="bg-blue-500 text-white rounded-full px-8 py-3">
              Add a University
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyUniversities;
