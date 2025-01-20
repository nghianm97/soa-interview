import React from "react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
/** Primary UI component for user interaction */
export const ButtonComponent = ({ type }: { type: string }) => {
  const [, setIsToggle] = React.useState(false);

  return (
    <div>
      {type === "toggle" ? (
        <Switch
          color="#38BDF9"
          className=" data-[state=checked]:bg-[#1677ff]"
          onCheckedChange={setIsToggle}
        />
      ) : (
        <div className="flex gap-4">
          <Button
            variant={"buttonStorybook"}
            className="text-black bg-white border hover:bg-unset"
          >
            Huỷ
          </Button>
          <Button
            variant={"buttonStorybook"}
            className="text-white border-none"
          >
            Lưu
          </Button>
        </div>
      )}
    </div>
  );
};
