"use client";

import { unFollowUser } from "@/actions/UnFollowUser";
import { followUser } from "@/actions/followUser";
import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import { toast } from "sonner";

interface IProps {
  isFollowing: boolean;
  id: string;
}

const Actions = ({ isFollowing, id }: IProps) => {
  const [inPending, startTransition] = useTransition();

  const onUnFollowHandler = () => {
    startTransition(async () => {
      await unFollowUser(id)
        .then((res) => {
          toast.success(`You have unfollowed ${res.following.userName}`);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    });
  };
  
  const onFollowHandler = () => {
    startTransition(async () => {
      await followUser(id)
        .then((res) => {
          toast.success(`You're  following ${res.following.userName} now`);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    });
  };
  return (
    <div>
      {isFollowing ? (
        <Button disabled={inPending} onClick={onUnFollowHandler}>
          UnFollow
        </Button>
      ) : (
        <Button disabled={inPending} onClick={onFollowHandler}>
          Follow
        </Button>
      )}
    </div>
  );
};

export default Actions;
