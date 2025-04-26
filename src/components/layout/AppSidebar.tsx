
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, BarChart, Users, MessageCircle, 
  PieChart, TrendingUp, Settings 
} from 'lucide-react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem 
} from "@/components/ui/sidebar";
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/"
  },
  {
    title: "User Segments",
    icon: Users,
    path: "/segments"
  },
  {
    title: "Sentiment Analysis",
    icon: MessageCircle,
    path: "/sentiment"
  },
  {
    title: "Churn Prediction",
    icon: PieChart,
    path: "/churn"
  },
  {
    title: "Trend Forecasting",
    icon: TrendingUp,
    path: "/trends"
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings"
  }
];

const AppSidebar = () => {
  return (
    <Sidebar className="border-r border-spotify-gray">
      <div className="p-4">
        <div className="flex items-center gap-2 px-2">
          <div className="w-8 h-8">
            <svg viewBox="0 0 1134 340" className="text-spotify-green fill-current">
              <path d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 12 35 38 35 10 0 17-2 22-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-5c-8 0-14-4-14-14v-48h21c1 0 2-1 2-2v-22c0-1-1-2-2-2h-21zm112-2c-32 0-52 25-52 60 0 36 21 61 53 61 17 0 30-6 39-12 1-1 1-1 1-2v-22c0-1-1-1-1-1h-1c-11 8-21 12-36 12-21 0-34-13-34-37h71c2 0 2 0 3-1 0-1 0-1 0-1 1-8 2-14 2-19 0-32-19-58-45-58zm-9 32c14 0 23 12 23 27l-1 1h-48c1-17 11-28 26-28z"></path>
            </svg>
          </div>
          <h1 className="text-white font-bold text-xl">Songbird AI</h1>
        </div>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-spotify-lightgray">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex gap-3 text-spotify-lightgray hover:text-white">
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="mt-auto p-4">
        <div className="bg-spotify-gray rounded-md p-3">
          <h3 className="font-medium text-sm mb-2 text-white">Need help?</h3>
          <p className="text-xs text-spotify-lightgray mb-3">Contact AI support for assistance with retention strategies</p>
          <button className="w-full bg-spotify-green hover:bg-opacity-80 text-black font-medium py-1.5 px-3 rounded text-sm">
            Get Support
          </button>
        </div>
      </div>
    </Sidebar>
  );
};

export default AppSidebar;
