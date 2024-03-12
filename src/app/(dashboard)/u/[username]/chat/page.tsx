import { currentUser } from "@clerk/nextjs";
import { getStreamByUserId } from "@/actions/streamActions";

import ChatCard from "./_components/ChatCard";

const ChatPage = async () => {
  const user = await currentUser();
  const userId = user?.publicMetadata.userId as string;
  const stream = await getStreamByUserId(userId);

  if (!stream) {
    throw new Error("Stream not found");
  }

  return (
    <section className="py-10 px-5">
      <h1 className="font-semibold font-2xl">Chat Settings</h1>
      <div>
        <ChatCard
          type="isChatEnabled"
          value={stream.isChatEnabled}
          label="Enable chat"
        />
        <ChatCard
          type="isChatDelayed"
          value={stream.isChatDelayed}
          label="Delay chat"
        />
        <ChatCard
          type="isChatFollowersOnly"
          value={stream.isChatFollowersOnly}
          label="Followers only"
        />
      </div>
    </section>
  );
};

export default ChatPage;
