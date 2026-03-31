import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from "recharts";

const UniversityBarChart = ({ data, university, selectedYear }) => {
  if (!university || data.length === 0) return null;

  return (
    <div className="w-full h-96 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">
        {university} - {selectedYear ? `(${selectedYear})` : "Year-wise"} Boys & Girls
      </h2>
      <ResponsiveContainer width="50%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" align="right" />
          <Bar dataKey="male" fill="#1E3A8A" name="Boys" />
          <Bar dataKey="female" fill="#FFC0CB" name="Girls" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UniversityBarChart;
