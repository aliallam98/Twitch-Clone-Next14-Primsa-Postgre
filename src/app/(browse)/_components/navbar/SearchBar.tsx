"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchTerm) return;

    const url = queryString.stringifyUrl(
      {
        url: "/search",
        query: { searchTerm: searchTerm },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  return (
    <form
      className="relative flex items-center w-full md:w-[400px] "
      onSubmit={onSubmitHandler}
    >
      {searchTerm && (
        <X
          className="absolute right-14 w-5 h-5 text-muted-foreground
            cursor-pointer hover:opacity-75"
          onClick={() => setSearchTerm("")}
        />
      )}
      <Input
        className="border-r-none"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        className="border-l-none"
        size={"sm"}
        variant={"ghost"}
        type="submit"
      >
        <SearchIcon size={16} className="text-muted-foreground" />
      </Button>
    </form>
  );
};

export default SearchBar;
