import { Button } from "@/components/ui/button";
import useDashboardSidebar from "@/hooks/useDashboardSidebar";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

interface IProps {
  icon: LucideIcon;
  path: string;
  label: string;
  isActive: boolean;
}
const NavItem = ({ icon: Icon, isActive, label, path }: IProps) => {
  const isCollapsed = useDashboardSidebar((state) => state.isCollapsed);
  return (
    <Button
      asChild
      variant={"ghost"}
      className={cn(
        "w-full h-12",
        isCollapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent"
      )}
    >
      <Link href={path}>
        <div className="flex items-center gap-x-4">
          <Icon className={cn("w-4 h-4 ", isCollapsed ? "mr-0" : "mr-2")} />
          {!isCollapsed && <span className="hidden lg:block">{label}</span>}
        </div>
      </Link>
    </Button>
  );
};

export default NavItem;

NavItem.Skeleton = function navItemSkeleton() {
  return (
    <div className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="w-[48px] h-[48px] rounded-md" />
      <div className="flex-1 hidden lg:block">
        <Skeleton className="h-6" />
      </div>
    </div>
  );
};
