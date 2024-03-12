"use client";

import { updateStream } from "@/actions/streamActions";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { useTransition } from "react";
import { toast } from "sonner";

type Types = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface IProps {
  type: Types;
  value: boolean;
  label: string;
}
const ChatCard = ({ label, type, value }: IProps) => {
  const [isPending, startTransition] = useTransition();
  const onChangeHandler = () => {
    startTransition(() => {
      updateStream({ [type]: !value })
        .then(() => toast.success("Chat settings updated!"))
        .catch(() => toast.error("Something went wrong"));
    });
  };
  return (
    <div className="bg-muted rounded-md px-4 py-6 flex items-center justify-between mt-4">
      <p>{label}</p>
      <Switch
        checked={value}
        onCheckedChange={onChangeHandler}
        disabled={isPending}
      />
    </div>
  );
};

export default ChatCard;

export const ChatCardSkeleton = () => {
  return <Skeleton className="rounded-xl p-10 w-full mt-4" />;
};
