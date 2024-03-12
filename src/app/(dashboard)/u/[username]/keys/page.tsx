import { Button } from "@/components/ui/button";
import KeyCard from "./_components/KeyCard";
import UrlCard from "./_components/UrlCard";
import GenerateModel from "./_components/GenerateModel";

const KeysPage = () => {
  return (
    <section className="py-10 px-5">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold font-2xl">Keys & Urls</h1>
        <GenerateModel/>
      </div>
      <UrlCard value="" />
      <KeyCard value="" />
    </section>
  );
};

export default KeysPage;
