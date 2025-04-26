
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageCircle, BarChart, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActionItem {
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  icon: React.ReactNode;
}

const actionItems: ActionItem[] = [
  {
    title: 'Pricing Discount for At-Risk Users',
    description: 'Offer 30% discount to users with high churn probability',
    impact: 'High',
    icon: <Users size={18} />
  },
  {
    title: 'Personalized Playlist Campaign',
    description: 'Launch tailored playlists for dormant user segment',
    impact: 'Medium',
    icon: <BarChart size={18} />
  },
  {
    title: 'Sentiment-Based Product Improvements',
    description: 'Address pricing concerns in next product update',
    impact: 'High',
    icon: <MessageCircle size={18} />
  },
  {
    title: 'Target Conversion of Free Trial Users',
    description: 'Email campaign to convert high-engagement free users',
    impact: 'Medium',
    icon: <PieChart size={18} />
  }
];

const RecommendedActions = () => {
  return (
    <Card className="bg-spotify-gray border-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-lg">AI Recommended Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {actionItems.map((action, index) => (
            <div key={index} className="p-3 bg-spotify-black rounded-md">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-spotify-gray rounded-md text-spotify-green">
                  {action.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-white">{action.title}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      action.impact === 'High' ? 'bg-green-900 text-green-300' :
                      action.impact === 'Medium' ? 'bg-amber-900 text-amber-300' :
                      'bg-blue-900 text-blue-300'
                    }`}>
                      {action.impact} Impact
                    </span>
                  </div>
                  <p className="text-sm text-spotify-lightgray">{action.description}</p>
                  <div className="mt-2 flex gap-2">
                    <Button 
                      variant="default"
                      size="sm" 
                      className="bg-spotify-green hover:bg-spotify-green/80 text-black"
                    >
                      Implement
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-spotify-gray text-spotify-lightgray hover:bg-spotify-gray/50"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedActions;
