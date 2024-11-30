import React from 'react';
import Button from './button';
import { Link } from 'react-router-dom';

interface MyComponentProps {
  valueInp: string;
  setValueInp: (value: string) => void;
  PushData: (value: string) => void;
}

const Input: React.FC<MyComponentProps> = ({ valueInp, setValueInp, PushData }) => {
  return (

    <section className="m-5 flex items-center">
      <div className=" px-4 mx-auto lg:px-12 w-full">
        <div className="w-full md:w-1/2">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              </div>
              <input type="text" id="simple-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={valueInp} onChange={(e) => setValueInp(e.target.value)} placeholder='поиск' />
            </div>
            <svg onClick={() => PushData(valueInp)} aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
            <Link className='ml-10' to={'Likes'}>Избранное</Link>
          </form>
        </div>
      </div>
    </section >
  );
};

export default Input;
{/* 
    <input className='inp' value={valueInp} onChange={(e) => setValueInp(e.target.value)} placeholder='поиск'>

    </input> */}