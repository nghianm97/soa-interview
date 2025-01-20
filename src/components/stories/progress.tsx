import ProgressBar from "@/components/base-component/progress-percentage";
import { Progress } from "@/components/ui/progress";
import React, { useEffect } from "react";

export default function ProgressComponent({ type }: { type: string }) {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    if (type === "line") {
      const timer = setTimeout(() => setProgress(66), 300);
      return () => clearTimeout(timer);
    }
  }, [type]);

  return (
    <div>
      {type === "circle" ? <ProgressBar percent={"50"} desc="Chỉ số" /> : null}
      {type === "line" ? (
        <div
          style={{ width: "1000px" }}
          className="flex space-x-4 py-6 justify-center item-center bg-white"
        >
          <Progress
            value={progress}
            className="w-[60%]"
            indicatorClassName="bg-[#38BDF9]"
          />
        </div>
      ) : null}
    </div>
  );
}
