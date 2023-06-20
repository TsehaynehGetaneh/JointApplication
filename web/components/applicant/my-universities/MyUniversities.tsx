import Link from 'next/link';
import { useState } from 'react';
import UniversityInfo from './UniversityInfo';
import ReviewSubmit from './ReviewSubmit';
import Left from './Left';

const MyUniversities: React.FC = () => {
  const [showUniversityInfo, setShowUniversityInfo] = useState(false);
  const [showReviewSubmit, setShowReviewSubmit] = useState(false);

  const handleShowUniversityInfo = () => {
    setShowUniversityInfo(true);
    setShowReviewSubmit(false);
  };

  const handleShowReviewSubmit = () => {
    setShowUniversityInfo(false);
    setShowReviewSubmit(true);
  };

  return (
    <div className="container mx-auto py-8 flex bg-gray-100 gap-2">
      <div className="">
        <h3 className="mb-2 px-4 py-2 w-[200px] text-white border-0 border-transparent shadow bg-gray-800">
          My Universities
        </h3>
        <Left
          label="Hawassa"
          buttons={[
            { label: 'College Information', onClick: handleShowUniversityInfo },
            { label: 'Active Application' },
            { label: 'Review and Submit - Joint App', onClick: handleShowReviewSubmit },
          ]}
        />
      </div>
      {showUniversityInfo && !showReviewSubmit && <UniversityInfo
        name="Aberystwyth University"
        phone="+44 (0)1970 622021"
        email="ug-admissions@aber.ac.uk"
        address="Penglais Campus, Penglais, Aberystwyth, Ceredigion SY23 3DD, GBR"
        logoSrc="https://www.bing.com/images/search?view=detailV2&ccid=hb%2b7HMnT&id=683D31221715ECC02B709BB88321089C873BF636&thid=OIP.hb-7HMnTqThYdJ7x--he0QHaEK&mediaurl=https%3a%2f%2fwww.irishexaminer.com%2fcms_media%2fmodule_img%2f5066%2f2533295_29_googlediscover_CIT_campus_281_29.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.85bfbb1cc9d3a93858749ef1fbe85ed1%3frik%3dNvY7h5wIIYO4mw%26pid%3dImgRaw%26r%3d0&exph=675&expw=1200&q=university+images+mtu&simid=608047501364906460&FORM=IRPRST&ck=BE7FEF11E1A879B2D18754AF30415D2F&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0"
        websiteUrl="https://www.aber.ac.uk/"
        admissionsUrl="https://www.aber.ac.uk/admissions/"
        facebookUrl="https://www.facebook.com/AberystwythUniversity"
        instagramUrl="https://www.instagram.com/aberystwyth.university/"
        twitterUrl="https://twitter.com/AberUni"
        youtubeUrl="https://www.youtube.com/user/AberystwythUni"
        applicationDeadlines={[
          { type: 'First Year', date: 'Rolling Admission - 07/28/2023' }
        ]}
        applicationFees={[
          { type: 'First Year International Fee', amount: '$0' },
          { type: 'First Year Domestic Fee', amount: '$0' }
        ]}
        recommendations={[
          'School Report Required',
          'Counselor Recommendation Required',
          'Final Report Required'
        ]}
        savesSchoolForms={true}
        additionalInformation="Aberystwyth University operates an inclusive admissions policy which values breadth as well as depth of study. We recognise the individual nature of every application, and our published typical offers should be viewed as a guide. Applicants are selected on their individual merits and offers can vary."
        writingRequirement={true}
      />}
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
