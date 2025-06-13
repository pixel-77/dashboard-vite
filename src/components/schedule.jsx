import React from 'react';

const Schedule = () => {
  return (
    <div className="mt-5 flex gap-4 p-4 bg-white rounded-xl shadow-md w-full">
      {/* Schedule Section */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-700">SCHEDULE</h2>
          <button className="text-sm px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
            Today
          </button>
        </div>

        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 mb-3 bg-blue-100 rounded-lg">
            <div className="text-sm text-gray-600">12:30PM - 01:30PM</div>
            <div className="font-semibold text-gray-800">Accounting Revision II</div>
            <div className="text-sm text-gray-600">Chapter 1</div>
          </div>
        ))}
      </div>

      {/* Roadmaps Section */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-700">ROADMAPS</h2>
          <button className="text-sm px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
            Ongoing
          </button>
        </div>

        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-[72px] mb-3 bg-blue-100 rounded-lg"></div>
        ))}
      </div>

      {/* Exams Section */}
      <div className="w-64">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-700">EXAMS</h2>
          <button className="text-xs px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            + Add
          </button>
        </div>

        <input
          type="text"
          placeholder="Search for exams.."
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md mb-4"
        />

        <div className="space-y-3">
          <div className="bg-blue-100 p-3 rounded-lg">
            <div className="font-semibold text-gray-800">NEET 2025</div>
            <div className="text-xs text-blue-600">Form filled : 13/05/2025</div>
            <div className="text-xs text-right text-gray-600">13 Days to go</div>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg">
            <div className="font-semibold text-gray-800">NEET 2025</div>
            <div className="text-xs text-blue-600">Form filled : 22/05/2025</div>
            <div className="text-xs text-right text-gray-600">22 Days to go</div>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <div className="font-semibold text-gray-800">CLAT 2025</div>
            <div className="text-xs text-green-700">Exam given</div>
            <div className="text-xs text-right text-green-700 font-medium">Notify for results!</div>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <div className="font-semibold text-gray-800">CUET 2025</div>
            <div className="text-xs text-blue-600">yet to be announced</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;