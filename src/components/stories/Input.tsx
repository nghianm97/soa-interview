import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

type Props = {
  searchValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type: string;
};

export default function InputComponent({
  searchValue,
  handleChange,
  handleKeyDown,
  type,
}: Props) {
  return (
    <div className="relative flex rounded-sm mt-5">
      {type === "searchInput" ? (
        <>
          <Input
            variant={"text"}
            placeholder="Nhập từ khoá để tìm kiếm"
            id="hs-trailing-button-add-on-with-icon-and-button"
            name="hs-trailing-button-add-on-with-icon-and-button"
            value={searchValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="bg-white w-[250px] md:w-[300px] lg:w-[500px] xl:w-[500px] 2xl:w-[500px] shadow-none border"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <SearchIcon size={15} className="text-gray-500" />
          </div>
          <button
            type="button"
            className="px-4 inline-flex whitespace-nowrap justify-center items-center 
      gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white
       hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Tìm kiếm
          </button>
        </>
      ) : null}

      {type === "input" ? (
        <div className="max-w-sm space-y-3">
          <Input
            variant={"search"}
            placeholder="Nhập từ khoá "
            id="hs-trailing-button-add-on-with-icon-and-button"
            name="hs-trailing-button-add-on-with-icon-and-button"
            value={searchValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="bg-white border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>
      ) : null}
    </div>
  );
}
