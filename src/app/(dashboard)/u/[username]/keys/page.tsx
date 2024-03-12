import KeyCard from "./_components/KeyCard";
import UrlCard from "./_components/UrlCard";
import GenerateModel from "./_components/GenerateModel";
import { getStreamByUserId } from "@/actions/streamActions";
import { currentUser } from "@clerk/nextjs";

const KeysPage = async () => {
  const user = await currentUser();
  const userId = user?.publicMetadata.userId as string;
  const stream = await getStreamByUserId(userId);

  if (!stream) {
    throw new Error("Stream not found");
  }

  return (
    <section className="py-10 px-5">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold font-2xl">Keys & Urls</h1>
        <GenerateModel />
      </div>
      <UrlCard value={stream?.serverUrl!} />
      <KeyCard value={stream?.streamKey!} />
    </section>
  );
};

export default KeysPage;
