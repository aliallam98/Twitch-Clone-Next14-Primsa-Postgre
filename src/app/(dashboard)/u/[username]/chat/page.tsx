import ChatCard from "./_components/ChatCard";

const ChatPage = () => {
  return (
    <section className="py-10 px-5">
      <h1 className="font-semibold font-2xl">Chat Settings</h1>
      <div>
        <ChatCard type="isChatEnabled" value="true" label="Enable chat" />
        <ChatCard type="isChatDelayed" value="true" label="Delay chat" />
        <ChatCard
          type="isChatFollowersOnly"
          value="true"
          label="Followers only"
        />
      </div>
    </section>
  );
};

export default ChatPage;
