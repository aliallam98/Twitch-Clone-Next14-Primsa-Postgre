"use client";

import { unFollowUser } from "@/actions/UnFollowUser";
import { blockUser } from "@/actions/blockUser";
import { followUser } from "@/actions/followUser";
import { unBlockUser } from "@/actions/unBlockUser";
import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import { toast } from "sonner";

interface IProps {
  isFollowing: boolean;
  blockData: {
    isBlockedByThisUser: boolean;
    amIBlocker: boolean;
  }
  id: string;
}

const Actions = ({ isFollowing, blockData, id }: IProps) => {
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

  const onClickHandler = () => {
    isFollowing ? onUnFollowHandler() : onFollowHandler();
  };

  const onBlockHandler = () => {
    startTransition(async () => {
      await blockUser(id)
        .then((data) =>
          toast.success(`You're blocked the user ${data?.blocked.userName}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const onUnBlockHandler = () => {
    startTransition(async () => {
      await unBlockUser(id)
        .then((data) =>
          toast.success(`Unblocked the user ${data?.blocked.userName}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  // console.log("blockDataByThisUser", blockData.amIBlocker);

  const blockHandler = () => {
    blockData.amIBlocker ? onUnBlockHandler() : onBlockHandler();
  };

  return (
    <div>
      <Button disabled={inPending} onClick={onClickHandler}>
        {isFollowing ? "UnFollow" : "Follow"}
      </Button>
      <Button disabled={inPending} onClick={blockHandler}>
        {blockData.amIBlocker ? "UnBlock" : "Block"}
      </Button>
    </div>
  );
};

export default Actions;
