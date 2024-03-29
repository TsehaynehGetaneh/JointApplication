import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { useRouter } from 'next/router';
import { useGetCollegeByIdQuery } from '@/store/college/college-api';
import CollgeDetail from '@/components/explore/CollegeDetail';
import Loading from '@/components/applicant/common/Loading';

const CollegeDetailPage = () => {
  const router = useRouter();
  const collegeId = router.query.id as string;

  const { data: college, isSuccess, isLoading, isError, error } = useGetCollegeByIdQuery(collegeId);
  console.log(college)

  if (isLoading) {
    return <div><Loading/></div>;
  }

  if (isError) {
    return <div>{error.toString()}</div>;
  }

  if (isSuccess) {
    return (
      <div>
        <Navbar />
        <div className="bg-white">
            <CollgeDetail key={college._id} college={college} />
        </div>
        <Footer />
      </div>
    );
  }
};

export default CollegeDetailPage;