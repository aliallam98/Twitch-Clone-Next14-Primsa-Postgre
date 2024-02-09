import { cn } from "@/lib/utils";
import React from "react";
interface IProps {
  className?: string;
}
const LiveBadge = ({ className }: IProps) => {
  return (
    <div
      className={cn(
        "bg-rose-500 p-0.5 px-1.5 border border-background rounded-md uppercase text-[10px] tracking-wide",
        className
      )}
    >
      Live
    </div>
  );
};

export default LiveBadge;
