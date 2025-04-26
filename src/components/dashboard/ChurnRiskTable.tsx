
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CustomProgress } from '@/components/ui/custom-progress';
import { Button } from '@/components/ui/button';

type User = {
  id: number;
  name: string;
  email: string;
  churnRisk: number;
  subscription: string;
  lastActive: string;
};

interface ChurnRiskTableProps {
  users: User[];
}

const ChurnRiskTable: React.FC<ChurnRiskTableProps> = ({ users }) => {
  return (
    <div className="rounded-md border border-spotify-gray bg-spotify-gray">
      <div className="p-4 border-b border-spotify-gray">
        <h3 className="text-lg font-medium text-white">High Churn Risk Users</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-spotify-gray/50">
            <TableHead className="text-spotify-lightgray">User</TableHead>
            <TableHead className="text-spotify-lightgray">Subscription</TableHead>
            <TableHead className="text-spotify-lightgray">Last Active</TableHead>
            <TableHead className="text-spotify-lightgray">Churn Risk</TableHead>
            <TableHead className="text-spotify-lightgray">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="hover:bg-spotify-gray/50">
              <TableCell className="font-medium">
                <div>
                  <p className="text-white">{user.name}</p>
                  <p className="text-xs text-spotify-lightgray">{user.email}</p>
                </div>
              </TableCell>
              <TableCell className="text-white">{user.subscription}</TableCell>
              <TableCell className="text-white">{user.lastActive}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <CustomProgress 
                    value={user.churnRisk} 
                    className="h-2" 
                    indicatorClassName={
                      user.churnRisk > 75 ? "bg-red-500" : 
                      user.churnRisk > 50 ? "bg-amber-500" : 
                      "bg-spotify-green"
                    }
                  />
                  <span className="text-xs text-white">{user.churnRisk}%</span>
                </div>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="text-spotify-green border-spotify-green hover:bg-spotify-green/10">
                  Engage
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ChurnRiskTable;
