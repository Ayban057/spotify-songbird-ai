
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomProgress } from '@/components/ui/custom-progress';

interface SentimentItem {
  category: string;
  score: number;
  sentimentClass: string;
}

const sentimentData: SentimentItem[] = [
  { category: 'User Interface', score: 78, sentimentClass: 'bg-spotify-green' },
  { category: 'Content Selection', score: 92, sentimentClass: 'bg-spotify-green' },
  { category: 'Pricing', score: 42, sentimentClass: 'bg-red-500' },
  { category: 'Recommendations', score: 85, sentimentClass: 'bg-spotify-green' },
  { category: 'Audio Quality', score: 70, sentimentClass: 'bg-amber-500' }
];

const SentimentAnalysisCard = () => {
  return (
    <Card className="bg-spotify-gray border-none">
      <CardHeader className="pb-0">
        <CardTitle className="text-white text-lg">Sentiment Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mt-4">
          {sentimentData.map((item) => (
            <div key={item.category} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-white">{item.category}</span>
                <span 
                  className={`font-medium ${
                    item.score >= 75 ? 'text-spotify-green' : 
                    item.score >= 60 ? 'text-amber-500' : 
                    'text-red-500'
                  }`}
                >
                  {item.score}%
                </span>
              </div>
              <CustomProgress 
                value={item.score} 
                className="h-2" 
                indicatorClassName={item.sentimentClass} 
              />
            </div>
          ))}
        </div>
        <div className="mt-4 pt-2 border-t border-spotify-gray">
          <div className="flex justify-between items-center">
            <span className="text-sm text-spotify-lightgray">Overall Sentiment</span>
            <span className="text-lg font-medium text-white">73%</span>
          </div>
          <div className="mt-2">
            <CustomProgress value={73} className="h-2" indicatorClassName="bg-spotify-green" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimentAnalysisCard;
