import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";

export default function RadioComponent() {
  return (
    <div>
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="default"
            id="r1"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full 
          text-blue-600 focus:ring-blue-500 disabled:opacity-50 
          disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 
          dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          />
          <Label
            htmlFor="r1"
            className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
          >
            Default
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="comfortable"
            id="r2"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full 
          text-blue-600 focus:ring-blue-500 disabled:opacity-50 
          disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 
          dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          />
          <Label
            htmlFor="r2"
            className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
          >
            Comfortable
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="compact"
            id="r3"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full 
          text-blue-600 focus:ring-blue-500 disabled:opacity-50 
          disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 
          dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          />
          <Label
            htmlFor="r3"
            className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
          >
            Compact
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
