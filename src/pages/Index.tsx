
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import MetricCard from '@/components/dashboard/MetricCard';
import ChurnRiskTable from '@/components/dashboard/ChurnRiskTable';
import ChurnPredictionChart from '@/components/dashboard/ChurnPredictionChart';
import UserSegmentsChart from '@/components/dashboard/UserSegmentsChart';
import SentimentAnalysisCard from '@/components/dashboard/SentimentAnalysisCard';
import RecommendedActions from '@/components/dashboard/RecommendedActions';
import { Users, PieChart, TrendingUp, BarChart } from 'lucide-react';
import { churnRiskUsers, overviewMetrics } from '@/lib/mock-data';

const Index = () => {
  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-spotify-lightgray">AI-powered insights to help reduce churn and improve retention</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard 
          title="Total Subscribers" 
          value="4.2M" 
          change={{ value: 3.8, isPositive: true }}
          icon={<Users size={24} />}
        />
        <MetricCard 
          title="Monthly Churn Rate" 
          value="4.6%" 
          change={{ value: 0.3, isPositive: false }}
          icon={<PieChart size={24} />}
        />
        <MetricCard 
          title="Avg. Lifetime Value" 
          value="$246" 
          change={{ value: 2.1, isPositive: true }}
          icon={<TrendingUp size={24} />}
        />
        <MetricCard 
          title="Engagement Score" 
          value="73/100" 
          change={{ value: 5, isPositive: true }}
          icon={<BarChart size={24} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <ChurnPredictionChart />
        </div>
        <div>
          <UserSegmentsChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChurnRiskTable users={churnRiskUsers} />
        <SentimentAnalysisCard />
      </div>

      <div className="mb-6">
        <RecommendedActions />
      </div>
    </AppLayout>
  );
};

export default Index;
