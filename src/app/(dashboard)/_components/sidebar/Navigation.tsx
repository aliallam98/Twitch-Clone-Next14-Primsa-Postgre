"use client";
import { useUser } from "@clerk/nextjs";
import { Fullscreen, KeyRound, MessageSquare, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import NavItem from "./NavItem";

const Navigation = () => {
  const { user } = useUser();
  const pathname = usePathname();

  const routes = [
    {
      label: "Stream",
      path: `/u/${user?.username}`,
      icon: Fullscreen,
    },
    {
      label: "Keys",
      path: `/u/${user?.username}/keys`,
      icon: KeyRound,
    },
    {
      label: "Chat",
      path: `/u/${user?.username}/chat`,
      icon: MessageSquare,
    },
    {
      label: "Community",
      path: `/u/${user?.username}/community`,
      icon: Users,
    },
  ];

  if (!user?.username) {
    return (
      <ul className="space-y-2 px-2 pt-6 lg:pt-2">
        {[...Array(4)].map((_, i) => (
          <NavItem.Skeleton key={i} />
        ))}
      </ul>
    );
  }
  return (
    <ul className="space-y-2 px-2 pt-6 lg:pt-2">
      {routes.map((route) => (
        <NavItem
          key={route.path}
          icon={route.icon}
          label={route.label}
          path={route.path}
          isActive={pathname === route.path}
        />
      ))}
    </ul>
  );
};

export default Navigation;
