import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (selectedPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    const selectedPage = selectedItem.selected;
    setCurrentPage(selectedPage);
    onPageChange(selectedPage);
  };

  return (
    <div className="m-16">
      <ReactPaginate
        previousLabel={'<<prev'}
        nextLabel={'next>>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'flex justify-center mt-4'}
        pageClassName={
          'border border-gray-300 bg-white shadow-md rounded-md h-8 w-8 flex items-center justify-center cursor-pointer transition transform hover:scale-105 hover:z-10'
        }
        activeClassName={'bg-blue-500 mx-2 text-green'}
        previousClassName={
          'border border-gray-300 bg-blue-500 text-white shadow-md rounded-full h-8 w-20 flex items-center justify-center cursor-pointer transition transform hover:scale-105 hover:z-10 mr-2'
        }
        nextClassName={
          'border border-gray-300 bg-blue-500 text-white shadow-md rounded-full h-8 w-20 flex items-center justify-center cursor-pointer transition transform hover:scale-105 hover:z-10 ml-2'
        }
        disabledClassName={'opacity-50 cursor-not-allowed'}
      />
    </div>
  );
};

export default Pagination;
