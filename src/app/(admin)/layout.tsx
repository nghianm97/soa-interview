"use client";

import { cn } from "@/lib/utils";
import { SearchProvider } from "@/context/search-context";
import { SidebarProvider } from "@/components/ui/sidebar";
import SkipToMain from "@/components/base/skip-to-main";
import { AppSidebar } from "@/components/layout/app-sidebar";
import Cookies from 'js-cookie'
import Head from "next/head";

export default function AdminPanelLayout({
  title,
  children,
  description,
}: {
  title: string,
  children: React.ReactNode,
  description: string
}) {
  const defaultOpen = Cookies.get('sidebar:state') !== 'false'

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <SearchProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <SkipToMain />
          <AppSidebar />
          <div
            id='content'
            className={cn(
              'max-w-full w-full ml-auto',
              'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
              'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
              'transition-[width] ease-linear duration-200',
              'h-svh flex flex-col',
              'group-data-[scroll-locked=1]/body:h-full',
              'group-data-[scroll-locked=1]/body:has-[main.fixed-main]:h-svh'
            )}
          >
            {children}
          </div>
        </SidebarProvider>
      </SearchProvider>
    </>
  );
}
