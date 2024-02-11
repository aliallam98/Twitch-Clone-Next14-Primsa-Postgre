import { Spinner } from "@/components/Spinner";
import { ClerkLoading, UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";

const Actions = async () => {
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <Link role={"button"} href={`/`} className="flex items-center gap-x-2">
          <span>
            <LogOut
              size={20}
              className="text-muted-foreground hover:opacity-75"
            />
          </span>
          <span className="hidden lg:block">Exit</span>
        </Link>
        <ClerkLoading>
          <Spinner size={"lg"} />
        </ClerkLoading>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
};

export default Actions;
