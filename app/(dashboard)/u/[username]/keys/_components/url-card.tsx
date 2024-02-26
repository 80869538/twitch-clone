import {Input} from "@/components/ui/input";

import {CopyButton} from "./copy-button";

interface UrlCardProps {
  value: string | null;
}

export const UrlCard = ({value}: UrlCardProps) => {
  return (
    <div className="rounded-xl bg-muted p-6 flex items-center gap-x-10">
      <p className="font-semibold">Server URL</p>
      <div className="grow flex items-center gap-x-2">
        <Input value={value || ""} disabled placeholder="Server URL" />
        <CopyButton value={value || ""} />
      </div>
    </div>
  );
};
