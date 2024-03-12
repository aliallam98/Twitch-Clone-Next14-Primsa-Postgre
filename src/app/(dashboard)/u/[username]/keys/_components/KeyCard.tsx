"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCheck, Copy, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const KeyCard = ({ value }: { value: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const CopyIcon = isCopied ? CheckCheck : Copy;
  const ShowIcon = isShow ? EyeOff : Eye;

  const onClickHandler = () => {
    if(!value){
        return
    }
    setIsCopied(true);
    navigator.clipboard.writeText(value);
    toast.success("Key Copied To Clipboard");
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const showHandler = () => {
    if(!value){
        return
    }
    setIsShow(!isShow)
  }
  return (
    <div className="flex items-center gap-4 mt-4">
      <p>Stream Key</p>
      <div className="flex items-center gap-6 flex-1">
        <Input value={value} placeholder="Stream Key" disabled type={isShow ? "text" : "password" }/>
        <div className="flex gap-4">
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={showHandler}
          >
            <ShowIcon size={16} />
          </Button>
          <Button variant={"ghost"} size={"sm"} onClick={onClickHandler}>
            <CopyIcon size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeyCard;
