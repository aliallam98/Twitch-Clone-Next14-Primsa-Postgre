"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";

type Types = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface IProps {
  type: Types;
  value: string;
  label: string;
}
const ChatCard = ({ label, type, value }: IProps) => {
  const onChangeHandler = () => {};
  return (
    <div className="bg-muted rounded-md px-4 py-6 flex items-center justify-between mt-4">
      <p>{label}</p>
      <Switch value={value} onCheckedChange={onChangeHandler} />
    </div>
  );
};

export default ChatCard;

ChatCard.Skeleton = function chatCardSkeleton() {
  return <Skeleton className="w-full h-[70px]" />;
};
