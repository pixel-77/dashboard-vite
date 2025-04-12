
import React from 'react';

const Schedule = () => {
  const gridItems = [
    { id: 1, content: "Morning Session" },
    { id: 2, content: "Lunch Break" },
    { id: 3, content: "Afternoon Session" },
    { id: 4, content: "Networking" },
    { id: 5, content: "Evening Session" },
    { id: 6, content: "Dinner" },
    { id: 7, content: "Closing Remarks" },
    { id: 8, content: "Social Event" },
  ];

  return (
    <div class="h-max w-max border border-black rounded-lg mt-16">
      <h3 class="font-bold">MY SCHEDULE</h3>
      <div class="grid grid-rows-4 grid-cols-2 gap-3">
        {gridItems.map((item) => (
          <div
            key={item.id}
            class="w-52 h-16 rounded-lg bg-blue-300"
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;