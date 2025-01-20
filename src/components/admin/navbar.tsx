"use client";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

import { IBreadcrumb, NavbarProps } from "@/types/layout";

export function Navbar({ arrBreadCrumb }: NavbarProps) {
  const renderBreadCrumb =
    arrBreadCrumb &&
    arrBreadCrumb?.map((item: IBreadcrumb, index: number) => (
      <BreadcrumbItem key={index}>
        <BreadcrumbLink asChild>
          <Link href="">
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
    <>
      <header className="bg-white sticky top-0 z-10 w-full border-b">
        <div className="flex h-14 items-center px-4 lg:px-12">
          <div className="flex items-center space-x-4 lg:space-x-0">
            <Breadcrumb>
              <BreadcrumbList>{renderBreadCrumb}</BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-1 items-center justify-end">
        
          </div>
        </div>
      </header>
    </>
  );
}
