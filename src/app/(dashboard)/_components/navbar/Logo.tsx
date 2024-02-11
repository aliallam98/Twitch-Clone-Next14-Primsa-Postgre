import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface IProps {
  size: number;
  isVertical?: boolean;
}
const DashboardLogo = ({ isVertical, size }: IProps) => {
  return (
    <div
      className={cn(
        "flex gap-2 items-center",
        isVertical && "flex-col gap-x-4"
      )}
    >
      <div className="rounded-full bg-white p-1 shrink-0 mr-8 md:mr-0">
        <Image
          alt="Logo image"
          width={size}
          height={size}
          src={"/spooky.svg"}
        />
      </div>
      <div
        className={cn(
          isVertical && " text-center",
          !isVertical && "hidden md:block"
        )}
      >
        <p className="font-semibold">Game House</p>
        <p className={cn("text-sm text-muted-foreground")}>Creator Dashboard</p>
      </div>
    </div>
  );
};

export default DashboardLogo;
