import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React, { useState } from 'react'

const Pagination = ({ data, currentPage, handlePageChange, pageLimit, dataLimit }) => {
    const [pages] = useState(Math.round(data / dataLimit));
    // const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        handlePageChange(currentPage + 1);
    }

    function goToPreviousPage() {
        handlePageChange(currentPage - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        handlePageChange(pageNumber);
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
                <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing
                        <span className="font-medium pl-1">{currentPage}</span>
                        -
                        <span className="font-medium pl-1 pr-1">{Math.round(data / dataLimit)}</span>
                        of
                        <span className="font-medium pl-1 pr-1">{data}</span>
                        results
                    </p>
                </div>
                <div className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    {/* previous button */}
                    <button
                        onClick={goToPreviousPage}
                        className={`prev ${currentPage === 1 ? 'disabled' : 'relative inline-flex items-center rounded-l-md border border-gray-300 bg-white text-base font-bold text-gray-500 hover:bg-gray-50'}`}
                    >
                        <ChevronLeftIcon className='h-12 w-12 p-4' />
                    </button>

                    {/* show page numbers */}
                    {getPaginationGroup().map((item, index) => (
                        <button
                            key={index}
                            onClick={changePage}
                            className={`   hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === item ? 'bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500'}`}
                        >
                            <span >{item}</span>
                        </button>
                    ))}

                    {/* next button */}
                    <button
                        onClick={goToNextPage}
                        className={`next ${currentPage === pages ? 'disabled' : 'relative inline-flex items-center rounded-r-md border border-gray-300 bg-white text-base font-bold text-gray-500 hover:bg-gray-50'}`}
                    >
                        <ChevronRightIcon className='h-12 w-12 p-4' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination