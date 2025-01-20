import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AuthState, AuthTokenSlice } from "../types/auth/auth";

export const useAuthStore = create<AuthState>()(
  devtools(
    persist<AuthState>(
      (...a) => ({
        ...AuthTokenSlice(...a),
      }),
      { name: "auth-storage" }
    ),
    { name: "auth" }
  )
);