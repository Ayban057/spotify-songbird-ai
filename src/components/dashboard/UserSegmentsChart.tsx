
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Casual Listeners', value: 35, color: '#1DB954' },
  { name: 'Power Users', value: 25, color: '#1ED760' },
  { name: 'New Subscribers', value: 15, color: '#2D46B9' },
  { name: 'Dormant Users', value: 20, color: '#F1A43C' },
  { name: 'At Risk', value: 5, color: '#F15E6C' },
];

const COLORS = data.map(item => item.color);

const UserSegmentsChart = () => {
  return (
    <Card className="bg-spotify-gray border-none">
      <CardHeader className="pb-0">
        <CardTitle className="text-white text-lg">User Segments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#282828', 
                  borderColor: '#404040',
                  color: 'white' 
                }}
                formatter={(value) => [`${value}%`, 'Percentage']}
              />
              <Legend 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                wrapperStyle={{ color: 'white' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserSegmentsChart;
