import { Skeleton } from "@/components/ui/skeleton";
import ChatCard, { ChatCardSkeleton } from "./_components/ChatCard";

const ChatLoading = () => {
  return (
    <div className="p-10">
      <Skeleton className="w-32 h-6 mb-4" />
      <ChatCardSkeleton />
      <ChatCardSkeleton />
      <ChatCardSkeleton />
    </div>
  );
};

export default ChatLoading;
