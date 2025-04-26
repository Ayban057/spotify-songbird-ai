
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Legend 
} from 'recharts';

const data = [
  { month: 'Jan', predictedChurn: 4.2, actualChurn: 4.5 },
  { month: 'Feb', predictedChurn: 4.8, actualChurn: 4.7 },
  { month: 'Mar', predictedChurn: 5.1, actualChurn: 5.3 },
  { month: 'Apr', predictedChurn: 4.9, actualChurn: 4.8 },
  { month: 'May', predictedChurn: 5.3, actualChurn: 5.4 },
  { month: 'Jun', predictedChurn: 5.7, actualChurn: 5.5 },
  { month: 'Jul', predictedChurn: 5.2, actualChurn: null },
  { month: 'Aug', predictedChurn: 4.9, actualChurn: null },
  { month: 'Sep', predictedChurn: 4.5, actualChurn: null },
];

const ChurnPredictionChart = () => {
  return (
    <Card className="bg-spotify-gray border-none">
      <CardHeader className="pb-0">
        <CardTitle className="text-white text-lg">Churn Rate Prediction</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1DB954" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#1DB954" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B3B3B3" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#B3B3B3" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
              <XAxis dataKey="month" stroke="#B3B3B3" />
              <YAxis stroke="#B3B3B3" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#282828', 
                  borderColor: '#404040',
                  color: 'white'
                }}
                labelStyle={{ color: 'white' }}
              />
              <Legend wrapperStyle={{ color: 'white' }} />
              <Area 
                type="monotone" 
                dataKey="actualChurn" 
                stroke="#B3B3B3" 
                fillOpacity={1} 
                fill="url(#colorActual)" 
                name="Actual Churn %"
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="predictedChurn" 
                stroke="#1DB954" 
                fillOpacity={1} 
                fill="url(#colorPredicted)" 
                name="Predicted Churn %"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-spotify-lightgray">
          <p>AI prediction model suggests a decreasing churn trend over the next quarter.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChurnPredictionChart;
