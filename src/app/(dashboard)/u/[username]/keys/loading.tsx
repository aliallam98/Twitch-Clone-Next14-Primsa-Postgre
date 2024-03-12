import { Skeleton } from "@/components/ui/skeleton";

const KeysPageLoading = () => {
  return (
    <div className="p-10">
      <Skeleton className="w-32 h-6 mb-4" />

      {[...Array(5)].map((_, i) => {
        return <Skeleton className="w-[70%] h-10 mb-4" key={i} />;
      })}
    </div>
  );
};

export default KeysPageLoading;
