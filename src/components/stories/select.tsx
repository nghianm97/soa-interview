import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";

export default function SelectComponent({ type }: { type: string }) {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  return (
    <div className="flex flex-col bg-white border-[1px] shadow-sm rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      {type === "select" ? (
        <Select>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="w-[300px]">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      ) : null}

      {type === "multiselect" ? (
        <div>
          <MultiSelect
            placeholder="Multiple select"
            className="w-[400px]"
            options={[
              { label: "Full-time", value: "full-time" },
              { label: "Part-time", value: "part-time" },
              { label: "Contract", value: "contract" },
              { label: "Remote", value: "remote" },
            ]}
            defaultValue={selectedItems}
            onValueChange={setSelectedItems}
          />
        </div>
      ) : null}
    </div>
  );
}
