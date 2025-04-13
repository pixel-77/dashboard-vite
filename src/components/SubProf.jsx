import React from 'react';
import icon from '../assets/book_3145740.png'
function Swp() {
  const subjectsData = [
    {
      subjectName: 'Physics',
      percentage: 38,
      icon: './assets/book_3145740.png', // Replace with your actual icon reference
      progressBarColor: 'orange',
    },
    {
      subjectName: 'Maths',
      percentage: 51,
      icon: 'maths-icon.svg', // Replace with your actual icon reference
      progressBarColor: 'lightblue',
    },
    {
      subjectName: 'GK',
      percentage: 13,
      icon: 'gk-icon.svg', // Replace with your actual icon reference
      progressBarColor: 'red',
    },
    {
      subjectName: 'Chemistry',
      percentage: 85,
      icon: 'chemistry-icon.svg', // Replace with your actual icon reference
      progressBarColor: 'green',
    },
    {
      subjectName: 'Finance',
      percentage: 68,
      icon: 'finance-icon.svg', // Replace with your actual icon reference
      progressBarColor: 'gold',
    },
    {
      subjectName: 'Biology',
      percentage: 68,
      icon: 'biology-icon.svg', // Replace with your actual icon reference
      progressBarColor: 'gold',
    },
    {
      subjectName: 'Accounting',
      percentage: 68,
      icon: 'accounting-icon.svg', // Replace with your actual icon reference
      progressBarColor: 'gold',
    },
    {
      subjectName: 'Accounting',
      percentage: 68,
      icon: 'accounting-icon.svg', // Replace with your actual icon reference
      progressBarColor: 'gold',
    },
    {
      subjectName: 'Statistics',
      percentage: 68,
      icon: 'statistics-icon.svg', // Replace with your actual icon reference
      progressBarColor: 'gold',
    },
    {
      subjectName: 'Statistics',
      percentage: 68,
      icon: 'statistics-icon.svg', // Replace with your actual icon reference
      progressBarColor: 'gold',
    },
  ];

  return (
    <div className="p-4 border rounded shadow-md">
      {/* heading */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">SUBJECT-WISE PROFICIENCY</h2>
        <a href="" className="text-blue-500">
          see more →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {subjectsData.map((item) => (
          <div
            key={item.subjectName}
            className="flex items-center p-4 border rounded"
          >
          
            <div className="mr0e-3">
              {/* Example: Replace with your icon component or image */}
              <img src={item.icon} alt={`${item.subjectName} Icon`} className="w-8 h-8"/>
            </div>

            <div className="flex-grow">
              <p className="font-semibold">{item.subjectName}</p>
              <div className="flex items-center mt-1">
                <p className="mr-2">{item.percentage}%</p>
                <div className="w-24 h-4 bg-gray-200 rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.progressBarColor,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Swp;