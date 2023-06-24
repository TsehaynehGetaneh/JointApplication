import { useGetCollegesQuery, useDeleteCollegeMutation } from "@/store/college/college-api";
import { University } from "@/types/university";
import Pagination from "@/components/common/Pagination";
import React, { useState, useEffect } from "react";
import CollegeCard from "./CollgeCard";
import FindCollege from "./FindCollge";

const CollegeList: React.FC = () => {
  // pagination state
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 8;

  // search value state
  const [searchValue, setSearchValue] = useState<string>("");

  // fetched data
  const { data: colleges, isSuccess, isLoading, isError, error } = useGetCollegesQuery();
  

  // Reset the current page when the search value changes
  useEffect(() => {
    setCurrentPage(0);
  }, [searchValue]);

  const handleSearchValueChange = (value: string) => {
    setSearchValue(value);
  };


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
    return <p>You do not have any colleges yet.</p>;
  }

  // Filter colleges based on search value.
  const filteredColleges = searchValue
    ? colleges.filter((college) =>
        college.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : colleges;

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedColleges = filteredColleges.slice(start, end);

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      <FindCollege onSearchValueChange={handleSearchValueChange} />
      <div className="mt-3 mb-5 mx-2">
        <div className="ml-2 mb-3">
          <h1 className="font-bold text-3xl mb-8">{filteredColleges.length} Colleges Found!</h1>
        </div>
        {filteredColleges.length === 0 ? (
          <p>No colleges found.</p>
        ) : (
          <div className="flex flex-wrap gap-6 mx-7">
            {paginatedColleges.map((college: University, index: number) => (
              <CollegeCard
                key={index}
                college={college}
              />
            ))}
          </div>
        )}
        <Pagination
          totalItems={filteredColleges.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CollegeList;