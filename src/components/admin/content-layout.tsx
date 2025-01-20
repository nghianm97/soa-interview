"use client";
import { ContentLayoutProps } from "@/types/layout";
import { Navbar } from "./navbar";

export function ContentLayout({
  title,
  children,
  arrBreadCrumb,
}: ContentLayoutProps) {

  return (
    <div className="h-full">
      <Navbar title={title || ""} arrBreadCrumb={arrBreadCrumb} />
      <div className="h-full">{children}</div>
    </div>
  );
}
