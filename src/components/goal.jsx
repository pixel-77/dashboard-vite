import React, { useState } from 'react';

function Goal() {
  const data = [
    { id: 1, date: "2023-10-15", subname: "Mathematics", chapter: "Algebra", accuracy: "85%" },
    { id: 2, date: "2023-10-16", subname: "Physics", chapter: "Thermodynamics", accuracy: "78%" },
    { id: 3, date: "2023-10-17", subname: "Chemistry", chapter: "Organic Chemistry", accuracy: "92%" },
    { id: 4, date: "2023-10-18", subname: "Biology", chapter: "Genetics", accuracy: "81%" },
    { id: 5, date: "2023-10-19", subname: "History", chapter: "World War II", accuracy: "88%" },
  ];

  return (
    <div className='m-0 pr-7 w-5xl'>
      <a className='text-blue-500 block mb-2' href="example.com">Goal Analysis-&gt;</a>

      <div className='grid grid-cols-1 gap-5'>
        {data.map((item) => (
          <div key={item.id} className="rounded-lg bg-blue-200 p-4 flex flex-col w-full">
            {/* Date and Subject Row */}
            <div className='flex justify-between items-start mb-1'>
              <span className='text-sm text-gray-600'>{item.date}</span>
              <div className='text-right'>
                <h1 className='font-bold'>{item.subname}</h1>
              </div>
            </div>

            {/* Chapter */}
            <p className='text-gray-700 mb-2'>{item.chapter}</p>

            <div className='rounded-full bg-white flex justify-center py-1 mb-2'>
              <p className='text-sm text-blue-500'>Improvement tips!</p>
            </div>

            {/* Accuracy */}
            <div className='flex justify-end items-center text-sm text-gray-600'>
              <span>Accuracy: {item.accuracy}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goal;