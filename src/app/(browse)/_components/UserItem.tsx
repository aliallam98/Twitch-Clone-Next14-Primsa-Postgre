import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserAvatar from "../../../components/UserAvatar";
import useSidebar from "@/hooks/useSidebar";
import LiveBadge from "@/components/LiveBadge";

interface IProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
  showLiveBadge?: boolean;
}

const UserItem = ({ username, imageUrl, isLive, showLiveBadge }: IProps) => {
  const isCollapsed = useSidebar((state) => state.isCollapsed);
  const pathname = usePathname();
  const href = `/${username}`;
  const isActive = pathname === href;

  return (
    <Button
      variant={"ghost"}
      asChild
      className={cn(
        "w-full h-12 flex",
        isActive && "bg-accent",
        isCollapsed ? "justify-center" : "justify-start"
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            "flex items-center justify-center lg:justify-start gap-2 w-full",
            isCollapsed && "lg:justify-center"
          )}
        >
          <UserAvatar
            username={username}
            imageUrl={imageUrl}
            isLive={isLive}
            showLiveBadge={showLiveBadge}
          />
          <p className={cn("hidden truncate", !isCollapsed && "lg:block")}>
            {username}
          </p>
          {isLive && (
            <LiveBadge
              className={cn(
                "ml-auto hidden lg:block",
                isCollapsed && "lg:hidden"
              )}
            />
          )}
        </div>
      </Link>
    </Button>
  );
};

export default UserItem;
