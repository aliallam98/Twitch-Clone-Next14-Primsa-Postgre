"use client";

import useDashboardSidebar from "@/hooks/useDashboardSidebar";
import { cn } from "@/lib/utils";

interface IProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: IProps) => {
  const isCollapsed = useDashboardSidebar((state) => state.isCollapsed);
  return (
    <aside
      className={cn(
        "flex flex-col h-screen w-[70px] lg:w-60 border-r lg:px-2 py-2",
        isCollapsed && "lg:w-[70px] lg:p-0"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;

//can use useMediaQuery from use-hook-ts to handle the same thing
