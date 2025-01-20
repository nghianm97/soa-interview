"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { JSX } from "react";

export default function AuthProvider({
  session,
  children,
}: {
  session?: Session | null;
  children: JSX.Element;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
