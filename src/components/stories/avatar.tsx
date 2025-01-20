import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

type AvatarType = {
  type: string;
};

export default function AvatarComponent({ type }: AvatarType) {
  return (
    <div>
      {/* //single */}
      {type === "single" ? (
        <Avatar className="bg-white border border-gray-300">
          <AvatarImage
            src={"/img/avatar.jpg"}
            alt="@shadcn"
            className="object-cover"
          />
          <AvatarFallback>
            <Image
              width={40}
              height={40}
              alt="default"
              src={"/img/avatar.jpg"}
            />
          </AvatarFallback>
        </Avatar>
      ) : null}

      {/* //group */}
      {type === "group" ? (
        <div className='class="flex -space-x-2'>
          <Image
            width={40}
            height={20}
            className="inline-block w-[40px] h-[40px] object-cover rounded-full ring-2 ring-blue-500"
            src={"/img/avatar.jpg"}
            alt="img"
          />
          <Image
            width={40}
            height={20}
            className="inline-block w-[40px] h-[40px] object-cover rounded-full ring-2 ring-blue-500"
            src={"/img/avatar.jpg"}
            alt="img"
          />
          <Image
            width={40}
            height={20}
            className="inline-block w-[40px] h-[40px] object-cover rounded-full ring-2 ring-blue-500"
            src={"/img/avatar.jpg"}
            alt="img"
          />
          <Image
            width={40}
            height={20}
            className="inline-block w-[40px] h-[40px] object-cover rounded-full ring-2 ring-blue-500"
            src={"/img/avatar.jpg"}
            alt="img"
          />
          <Image
            width={40}
            height={20}
            className="inline-block w-[40px] h-[40px] object-cover rounded-full ring-2 ring-blue-500"
            src={"/img/avatar.jpg"}
            alt="img"
          />
        </div>
      ) : null}
    </div>
  );
}
