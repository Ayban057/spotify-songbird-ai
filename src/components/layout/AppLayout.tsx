
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from './AppSidebar';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <div className="flex items-center h-16 border-b border-spotify-gray px-4">
            <SidebarTrigger />
            <div className="flex justify-between items-center w-full px-4">
              <h2 className="text-white font-medium">Spotify Songbird AI</h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-spotify-lightgray">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-spotify-green text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
                </div>
                <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center text-black font-medium">
                  SP
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
