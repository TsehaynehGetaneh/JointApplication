import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface HelpItemProps {
    question: string;
    answer: string;
}

// HelpItem component to render each help section
const HelpItem: React.FC<HelpItemProps> = ({ question, answer }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore((prevShowMore) => !prevShowMore);                       
    };

    return (
        <div className="mt-4 hover:bg-gray-00">
            <div>
                <p>
                    <span className="font-bold">{question}</span>
                    <br />
                    {showMore ? answer : answer.split('\n')[0]}
                    {/* Render only the first line of the answer initially */}
                </p>
                {answer.split('\n').length > 1 && (
                    /* Render the "Show more" button if the answer has more than one line */
                    <button
                        onClick={toggleShowMore}
                        className="text-sm text-blue-600 font-medium hover:underline focus:outline-none"
                    >
                        {showMore ? 'Show less' : 'Show more'}
                    </button>
                )}
            </div>
            {showMore && (
                /* Render the remaining part of the answer when "Show more" is clicked */
                <div className="mt-2">
                    <p>{answer.split('\n').slice(1).join('\n')}</p>
                </div>
            )}
            <div>
                <Link href="#" className="text-blue-600 font-medium hover:underline">
                    More help on this topic
                </Link>
            </div>
        </div>
    );
};

const HelpSection = () => {
    const [searchVisible, setSearchVisible] = useState(false);

    const handleSearchClick = () => {
        setSearchVisible(true);
    };

  
    const handleCloseDialog = () => {
        setSearchVisible(false);
    };

    return (
        <div className="w-72 border-4 hidden md:block border-blue-500 text-sm text-gray-800 p-4">
            <div className="flex  justify-between items-center mb-4 border-b-4 border-blue-500 pb-5">
                <h3 className="text-lg sm:text-xl font-bold ">Need help?</h3>
                {!searchVisible && (
                    <FaSearch
                        className="text-blue-500 cursor-pointer hover:text-blue-800 hover:scale-y-110 rounded-md"
                        onClick={handleSearchClick}
                    />
                )}
            </div>
            {/* search section  */}
            {searchVisible ? (
                <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="w-full max-w-md bg-white border border-gray-300 rounded-md p-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold">How can we help?</h3>
                            <button
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={handleCloseDialog}
                            >
                                Close dialog
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder="Ask a question or search for a topic"
                            className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
                        />
                        <p className="text-sm text-gray-500 mb-6">
                            Or view all help topics
                            <Link
                                href="https://example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline ml-1"
                            >
                                Opens Applicant Solutions Center in new tab.
                            </Link>
                        </p>
                        <button className="bg-blue-500 text-white rounded-md py-2 px-4">
                            Search
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="mb-6">
                        <p className="font-bold">How many universities can I add to my Dashboard?</p>
                        <p>
                            JointApplication member universities have stipulated that applicants may add up to 20 universities.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <HelpItem
                            question="How can I remove a school from my Dashboard?"
                            answer={`You can remove a school by clicking the X icon on the school name line on the Dashboard.
              However, a school cannot be removed from your list once the application has been submitted.
              You can re-add any school you've removed by searching for and adding the school again.`}
                        />

                        <HelpItem
                            question="How can I add a college to my Dashboard?"
                            answer={`You can add a college from the College Search tab.
              Then follow these steps:
              1. Search for the school using the available search criteria.
              2. In the Results List, click on the + button beside the college name.
              3. You will know that the school has been added to your My university page by the green check indicator.`}
                        />
                    </div>
                </div>
            )}
        </div>
        
    );
};

export default HelpSection;
