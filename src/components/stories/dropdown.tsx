import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function DropdownComponent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Button
          variant={"buttonAdminDefault"}
          className="bg-muted border-none rounded-md inline-flex justify-center bg-buttonAdmin items-center hover:bg-blue-400"
        >
          Tạo học liệu <ChevronDownIcon className="w-[15px] ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-full">
        <DropdownMenuLabel className="inline-flex gap-3 items-center justify-between cursor-pointer hover:bg-hoverBackgroundButton hover:transition">
          <div className="inline-flex gap-3">
            <Image
              src={"/create-lesson-img-1.svg"}
              alt="tao-hoc-lieu-img"
              objectFit="cover"
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <p className="font-semibold">Tạo bài học</p>
              <p className="text-secondaryColor">
                Thiết lập nội dung <br /> lý thuyết bài học
              </p>
            </div>
          </div>
          <ChevronRightIcon size={"15px"} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/list-question/0">
          <DropdownMenuLabel className="inline-flex gap-3 items-center cursor-pointer hover:bg-hoverBackgroundButton hover:transition">
            <Image
              src={"/create-lesson-img-2.svg"}
              alt="tao-hoc-lieu-img"
              objectFit="cover"
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <p className="font-semibold">Tạo bài tập</p>
              <p className="text-secondaryColor">
                Thiết lập câu hỏi <br /> bài tập
              </p>
            </div>
            <ChevronRightIcon size={"15px"} />
          </DropdownMenuLabel>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="inline-flex gap-3 items-center cursor-pointer hover:bg-hoverBackgroundButton hover:transition">
          <Image
            src={"/create-lesson-img-3.svg"}
            alt="tao-hoc-lieu-img"
            objectFit="cover"
            width={50}
            height={50}
          />
          <div className="flex flex-col">
            <p className="font-semibold">Tạo khoá học</p>
            <p className="text-secondaryColor">
              Thiết lập nội dung <br /> tài liệu tham khảo
            </p>
          </div>
          <ChevronRightIcon size={"15px"} />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
