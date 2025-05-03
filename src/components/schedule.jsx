import React from 'react';

const Schedule = () => {
  const scheduleData = [
    { id: 1,  subject: "Accounting Revision II", chapter: "Chapter 1" },
    { id: 2,  subject: "Accounting Revision II", chapter: "Chapter 1" },
    { id: 3, subject: "Accounting Revision II", chapter: "Chapter 1" },
    { id: 4, subject: "Accounting Revision II", chapter: "Chapter 1" },
  ];

  const examData = [
    { id: 1, name: "NEET 2025", date: "13/05/2025", daysToGo: 13 },
    { id: 2, name: "CLAT 2025", status: "Exam given" },
    { id: 3, name: "CUET 2025", status: "yet to be announced" },
  ];

  const timeData = [
    { id: 1, startTime: "12:30PM", endTime: "01:30PM" },
    { id: 2, startTime: "12:30PM", endTime: "01:30PM" },
    { id: 3, startTime: "12:30PM", endTime: "01:30PM" },
    { id: 4, startTime: "12:30PM", endTime: "01:30PM" },
  ];

  return (
    <div>
        {/* schedule */}
        <div>
          <h2>SCHEDULE</h2>
          {/* blue boxes */}
          <div>
            {scheduleData.map(({ id, subject, chapter }) => (
              <div key={id}>
                {subject} - {chapter}
              </div>
            ))}
         </div>
            
        
          
        {/* roadmap */}
        <div>

        </div>
        {/* exa, */}
        <div>

        </div>
    </div>
  </div>
  );
};

export default Schedule;