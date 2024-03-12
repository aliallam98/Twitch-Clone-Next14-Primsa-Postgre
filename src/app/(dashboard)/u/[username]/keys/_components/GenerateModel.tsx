"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogClose } from "@radix-ui/react-dialog";
import { AlertTriangle } from "lucide-react";

const GenerateModel = () => {
  const onClickHandler = () => {};
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Generate Connection</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Connection</DialogTitle>
        </DialogHeader>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Ingress Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="RTMP">RTMP</SelectItem>
            <SelectItem value="WHIP">WHIP</SelectItem>
          </SelectContent>
        </Select>
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>
            This action will reset all active streams using the current
            connection
          </AlertDescription>
        </Alert>
        <div className="ml-auto space-x-2">
          <DialogClose asChild>
            <Button variant={"ghost"}>Cancel</Button>
          </DialogClose>
          <Button onClick={onClickHandler}>Generate</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GenerateModel;
