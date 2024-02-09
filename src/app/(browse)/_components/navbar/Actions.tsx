import { Spinner } from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import {
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  currentUser,
} from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

const Actions = async () => {
  const user = await currentUser();

  return (
    <div>
      <SignedIn>
        <div className="flex items-center gap-x-2">
          <Link
            role={"button"}
            href={`/u/${user?.username}}`}
            className="flex items-center gap-x-2"
          >
            <span className="hidden lg:block">Dashboard</span>
            <span>
              <Clapperboard
                size={20}
                className="text-muted-foreground hover:opacity-75"
              />
            </span>
          </Link>
          <ClerkLoading>
            <Spinner size={"lg"} />
          </ClerkLoading>
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton afterSignInUrl={"/"}>
          <Button size="sm">Login</Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default Actions;
