import React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

type ButtonDragComponentProps = {
  onDragStart: (e: React.DragEvent, option?: string) => void;
};

/** Primary UI component for user interaction */
export const ButtonDragComponent = ({
  onDragStart,
}: ButtonDragComponentProps) => {
  return (
    <div className="flex gap-4">
      <Button
        className="rounded-lg"
        onDragStart={(e) => onDragStart(e)}
        draggable
        type="button"
      >
        <Image
          width={30}
          height={30}
          src="/img/drag-indicator.svg"
          alt=""
          className="pr-3"
        />
        <span>Drag</span>
      </Button>
    </div>
  );
};
