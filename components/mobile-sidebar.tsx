"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
  apiLimitCount: number;
}
const MobileSidebar: React.FC<MobileSidebarProps> = ({ apiLimitCount }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Button className="md:hidden" variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side="left">
        <Sidebar apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
