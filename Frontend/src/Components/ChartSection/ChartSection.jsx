import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartSection = ({ title, data, chartType = 'line' }) => {
  const [timeRange, setTimeRange] = useState('year');
  
  // Sample data if none provided
  const sampleData = data || [
    { year: '2017', raw: 40, certified: 24 },
    { year: '2018', raw: 30, certified: 13 },
    { year: '2019', raw: 45, certified: 28 },
    { year: '2020', raw: 35, certified: 20 },
    { year: '2021', raw: 50, certified: 35 },
    { year: '2022', raw: 43, certified: 29 },
  ];
  
  const timeRanges = ['week', 'month', 'quarter', 'year', 'all'];

  return (
    <div className="bg-white rounded-md p-3 sm:p-4 mb-4 shadow-sm">
      <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
        <h3 className="font-medium text-sm sm:text-base">{title}</h3>
        <div className="flex text-xs gap-1">
          {timeRanges.map(range => (
            <button
              key={range}
              className={`px-2 py-1 rounded ${timeRange === range ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
              onClick={() => setTimeRange(range)}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="h-48 sm:h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="raw" stroke="#3B82F6" name="Raw Diamonds" />
            <Line type="monotone" dataKey="certified" stroke="#EC4899" name="Certified Diamonds" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;