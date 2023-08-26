import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="relative h-full">
      <aside className="hidden h-full bg-gray-900 md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
        <Sidebar apiLimitCount={apiLimitCount} />
      </aside>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
