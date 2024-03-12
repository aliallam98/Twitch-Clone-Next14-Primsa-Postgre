"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const UrlCard = ({ value }: { value: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const Icon = isCopied ? CheckCheck : Copy;

  const onClickHandler = () => {
    if (!value) {
      return;
    }
    setIsCopied(true);
    navigator.clipboard.writeText(value);
    toast.success("URl Copied To Clipboard");
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <div className="flex items-center gap-4 mt-4">
      <p>URL</p>
      <div className="flex items-center gap-6 flex-1">
        <Input value={value} placeholder="URL" disabled />
        <Button variant={"ghost"} size={"sm"} onClick={onClickHandler}>
          <Icon size={16} />
        </Button>
      </div>
    </div>
  );
};

export default UrlCard;
