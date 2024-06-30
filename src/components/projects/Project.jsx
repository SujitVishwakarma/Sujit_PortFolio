import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTCARD } from '../../utils/data';

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  // Calculate pagination boundaries
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentProjects = PROJECTCARD.slice(firstIndex, lastIndex);

  // Total pages calculation
  const totalPages = Math.ceil(PROJECTCARD.length / perPage);

  // Handle page navigation
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex text-center items-center justify-center'>
        <div className='text-4xl mb-9 font-bold'>
          <h2>My Projects</h2>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        {currentProjects.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            des={item.des}
            src={item.src}
            gitUrl={item.gitUrl}
            webUrl={item.webUrl}
          />
        ))}
      </div>
      <div className='flex justify-center mt-8'>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className='mx-2 px-4 py-2 border border-gray-400 bg-gray-900 rounded-md hover:bg-gray-800'
        >
          Previous
        </button>
        <span className='mx-4 px-4 py-2 text-gray-700'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className='mx-2 px-6 py-2 border border-gray-400 bg-gray-900 rounded-md hover:bg-gray-800'
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Project;
