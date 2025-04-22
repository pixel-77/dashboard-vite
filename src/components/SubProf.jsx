import React from 'react'

function Swp() {
    const Subdata = 
    [
        { id: 1, subname: "ALGEBRA", percentage: 67, icon: "icon" },
        { id: 2, subname: "GEOMETRY", percentage: 82, icon: "icon" },
        { id: 3, subname: "CALCULUS", percentage: 54, icon: "icon" },
        { id: 4, subname: "STATISTICS", percentage: 73, icon: "icon" },
        { id: 5, subname: "TRIGONOMETRY", percentage: 88, icon: "icon" },
        { id: 6, subname: "NUMBER THEORY", percentage: 61, icon: "icon" },
        { id: 7, subname: "DISCRETE MATH", percentage: 49, icon: "icon" },
        { id: 8, subname: "LINEAR ALGEBRA", percentage: 76, icon: "icon" },
        { id: 9, subname: "PROBABILITY", percentage: 90, icon: "icon" },
        { id: 10, subname: "MATRIX THEORY", percentage: 55, icon: "icon" }
    ]

  const ProgressBar = ({ progress, color = "blue" }) => {
    const colorClasses = {
      blue: "bg-blue-500",
      yellow: "bg-yellow-500" 
    }
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div 
          className={`${colorClasses[color]} h-2.5 rounded-full`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    )
  }

  return (
    <div className="m-0 pl-7 w-4xl">
      {/* Heading */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Subject proficiency</h2>
        <a href="example.com" className="text-blue-500 hover:underline">see more</a>
      </div>
      
      {/* Subjects Grid */}
      <div className="grid grid-cols-2 gap-4">
        {Subdata.map((item) => (
          <div 
            key={item.id} 
            className="bg-blue-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{item.subname}</h3>
              <span className="text-gray-700">{item.percentage}%</span>
            </div>
            <ProgressBar 
              progress={item.percentage} 
              color={item.percentage > 70 ? "blue" : "yellow"}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Swp