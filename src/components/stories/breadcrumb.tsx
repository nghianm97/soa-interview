import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function BreadcrumbComponent() {
  const arrBreadCrumb: any = [
    {
      id: 1,
      name: "Trang chủ",
      link: "/",
    },
    {
      id: 2,
      name: <strong>Bài tập</strong>,
      link: "/",
    },
  ];
  const renderBreadCrumb =
    arrBreadCrumb &&
    arrBreadCrumb?.map((item: any, index: number) => (
      <BreadcrumbItem key={index}>
        <BreadcrumbLink asChild>
          <Link href={item.link}>
            {item.name}{" "}
            {index !== arrBreadCrumb.length - 1 ? (
              <span className="ml-1">/</span>
            ) : (
              ""
            )}
          </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    ));
  return (
    <div className="relative flex rounded-sm mt-5">
      <Breadcrumb>
        <BreadcrumbList>{renderBreadCrumb}</BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
