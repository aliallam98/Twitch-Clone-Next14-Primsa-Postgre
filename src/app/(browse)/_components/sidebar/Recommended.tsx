"use client";

import useSidebar from "@/hooks/useSidebar";
import { cn } from "@/lib/utils";
import React from "react";
import UserItem from "../UserItem";

const Recommended = () => {
  const isCollapsed = useSidebar((state) => state.isCollapsed);

  return (
    <div className="flex flex-col gap-2 mt-4">
      <p
        className={cn(
          "text-sm text-muted-foreground hidden",
          !isCollapsed && "lg:block"
        )}
      >
        Recommended
      </p>
      <div>
        <UserItem imageUrl="" username="Ali" isLive  />
      </div>
    </div>
  );
};

export default Recommended;
