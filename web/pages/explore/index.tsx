import { useGetCollegesQuery } from "@/store/college/college-api";
import { NextPage } from "next";
import { University } from "@/types/university";
import FindCollege from "@/components/explore/FindCollege";
import CollegeCard from "@/components/explore/CollegeCard";
import Footer from "@/components/common/Footer";
import Pagination from "@/components/common/Pagination";
import { useState } from "react";

const Colleges: NextPage = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 8;

  // get all universities
  const { data: colleges, isSuccess, isLoading, isError, error } = useGetCollegesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        <p>Error occurred while fetching colleges.</p>
      </div>
    );
  }

  if (!colleges || colleges.length === 0) {
    return <p>You do not have any colleges yet.</p>
  }

  // Calculate pagination range
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedColleges = colleges.slice(start, end);

  // Handle page change
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      <FindCollege />
      <div className="mt-3 mb-5 mx-2">
        <div className="ml-2 mb-3">
          <h1 className="font-bold text-3xl mb-8">{colleges.length} Colleges Found!</h1>
        </div>
        <div className="flex flex-wrap gap-6 mx-7">
          {paginatedColleges.map((college: University, index: number) => (
            <CollegeCard key={index} college={college} />
          ))}
        </div>
        <Pagination
          totalItems={colleges.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Colleges;
