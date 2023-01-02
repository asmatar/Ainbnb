
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, indexOfFirstPost, indexOfLastPost }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='flex flex-col items-center w-full my-4'>
      <ul className='flex justify-center '>
        {pageNumbers.map((number, index) => (
          <li key={number} className='mx-1'>
            <a onClick={() => paginate(number)} href='#' className={` px-2 hover:bg-black hover:rounded-full hover:text-white`}>
              {number}
            </a>
          </li>
        ))}
      </ul>
      <p className='text-gray-400 text-sm py-1'>{indexOfFirstPost +1 } - {indexOfLastPost} of {totalPosts} to stay </p>
    </nav>
  );
};

export default Pagination;