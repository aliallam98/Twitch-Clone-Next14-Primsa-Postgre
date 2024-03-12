"use client";

import useSidebar from "@/hooks/useSidebar";
import { cn } from "@/lib/utils";
import React from "react";
import { User } from "@prisma/client";
import UserItem from "../UserItem";

interface IProps {
  data: User[];
}
const Recommended = ({ data }: IProps) => {
  const isCollapsed = useSidebar((state) => state.isCollapsed);

  if (!data.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 mt-4 ">
      <p
        className={cn(
          "text-sm text-muted-foreground hidden lg:pl-6 mb-1",
          !isCollapsed && "lg:block"
        )}
      >
        Recommended
      </p>
      {data.length > 0 && (
        <div>
          {data.map((user) => (
            <UserItem
              key={user.id}
              imageUrl={user.imageUrl}
              username={user.userName}
              isLive
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommended;
