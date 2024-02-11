"use client";
import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import useDashboardSidebar from "@/hooks/useDashboardSidebar";
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from "lucide-react";
import React from "react";

const Trigger = () => {
  const { isCollapsed, onExpand, onCollapse } = useDashboardSidebar();

  const label = isCollapsed ? "Expand" : "Collapse";

  return (
    <div className="hidden lg:block">
      {!isCollapsed && (
        <div className="flex items-center w-full mt-2">
          <p className="font-semibold">Dashboard</p>
          <Hint label={label} asChild side="right">
            <Button
              className="ml-auto h-auto p-2"
              variant={"ghost"}
              onClick={onCollapse}
            >
              <ArrowLeftFromLineIcon size={16} />
            </Button>
          </Hint>
        </div>
      )}

      {isCollapsed && (
        <div className="flex items-center justify-center mt-2">
          <Hint asChild label={label} side="right">
            <Button className="h-auto p-2" variant={"ghost"} onClick={onExpand}>
              <ArrowRightFromLineIcon size={16} />
            </Button>
          </Hint>
        </div>
      )}
    </div>
  );
};

export default Trigger;
