
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  icon,
  className
}) => {
  return (
    <Card className={cn("bg-spotify-gray border-none", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-spotify-lightgray text-sm">{title}</p>
            <h3 className="text-2xl font-bold mt-1 text-white">{value}</h3>
            {change && (
              <div className="flex items-center mt-2">
                <span className={cn(
                  "text-xs",
                  change.isPositive ? "text-green-500" : "text-red-500"
                )}>
                  {change.isPositive ? '↑' : '↓'} {Math.abs(change.value)}%
                </span>
                <span className="text-xs text-spotify-lightgray ml-1">vs last month</span>
              </div>
            )}
          </div>
          {icon && <div className="text-spotify-green">{icon}</div>}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
