"use client";

import useSidebar from "@/hooks/useSidebar";
import { cn } from "@/lib/utils";
import { Follow, User } from "@prisma/client";
import UserItem from "../UserItem";

interface IProps {
  following: (Follow & { following: User })[];
}

const Following = ({ following }: IProps) => {
  const isCollapsed = useSidebar((state) => state.isCollapsed);

  if(!following.length){
    return null
  }

  return (
    <div className="flex flex-col gap-2 mt-4">
      <p
        className={cn(
          "text-sm text-muted-foreground hidden",
          !isCollapsed && "lg:block"
        )}
      >
        Following
      </p>
      {following.length > 0 && (
        <div>
          {following.map((user) => (
            <UserItem
              key={user.following.id}
              imageUrl={user.following.imageUrl}
              username={user.following.userName}
              isLive
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Following;
