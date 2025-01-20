import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen w-screen flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="text-center">
          <Image
            src={"/not-found.webp"}
            alt="not-found"
            priority
            style={{ height: "auto" }}
            className="mb-4 mx-auto"
            width={500}
            height={222}
          />
          <p className="text-xl mb-8 md:text-3xl">
            Chúng tôi không thể tìm thấy trang mà bạn yêu cầu
          </p>

          <Link href={"/"}>
            <Button variant={"default"}>Trở về trang chủ</Button>
          </Link>
        </div>
        <div className="max-w-lg"></div>
      </div>
    </div>
  );
}
