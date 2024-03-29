"use client";

import useSidebar from "@/hooks/useSidebar";
// import useSidebar from "@/hooks/useSidebar"
import { cn } from "@/lib/utils";

interface IProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: IProps) => {
  const isCollapsed = useSidebar((state) => state.isCollapsed);
  return (
    <aside
      className={cn(
        "flex flex-col h-screen w-[70px] lg:w-60 border-r px-2 py-2",
        isCollapsed && "lg:w-[70px] "
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;

//can use useMediaQuery from use-hook-ts to handle the same thing
