import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface IProps {
  size: number;
  isVertical?: boolean;
}
const Logo = ({ isVertical, size }: IProps) => {
  return (
    <div
      className={cn(
        "flex gap-2 items-center",
        isVertical && "flex-col gap-x-4"
      )}
    >
      <div className="rounded-full bg-white p-1 shrink-0 mr-8 lg:mr-0">
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
          !isVertical && "hidden lg:block"
        )}
      >
        <p className="font-semibold">Game House</p>
        <p className={cn("text-sm text-muted-foreground")}>Let&apos;s Play</p>
      </div>
    </div>
  );
};

export default Logo;
