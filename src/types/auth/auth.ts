/* eslint-disable @typescript-eslint/no-explicit-any */
import { StateCreator } from "zustand";

type UserInfo = {
  anhDaiDien: string | null;
  permission: number | null;
  chucVus: string[];
  chuyenNganh: string;
  diaChi: string | null;
  dienThoai: string | null;
  donViCongTac: string | null;
  maDonViCongTac: string | null;
  email: string | null;
  gioiTinh: string | null;
  id: number | null;
  muiGio: string | null;
  ngaySinh: string | null;
  hoVaTen: string | null;
  ngonNgu: string | null;
  trangThai: string | null;
  vaiTros: string[];
  enterpriseUUID: string;
  trinhDo: any,
  tinhThanh: any,
  quanHuyen: any,
  phuongXa: any,
  quocGia: any,
  enterpriseUuid: string,
  tenTruong: string,
  tieuSu: string,
  chiTietDonViCongtac: any
};
export interface AuthState {
  isAuthenticated: boolean;
  isSaveInfo?: boolean;
  mustChangePass?: boolean;
  config?: any;
  accessToken?: string | null;
  refreshToken?: string | null;
  expiresIn?: Date | null
  edxToken?: string | null;
  user?: UserInfo | null;
  username?: string;
  setExpiresIn: (expiresIn: Date) => void;
  saveUserInfo: (userInfo: object) => void;
  getUserInfo: (userInfo: object) => void;
  rememberInfo: (isSaveInfo: boolean, username: string) => void;
  rememberSession: (refreshToken: string) => void;
  setMustChangePass: (value: boolean) => void;
  setConfig: (value: any) => void;
}

export const AuthTokenSlice: StateCreator<AuthState> = (set) => ({
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: null,
  expiresIn: null,
  username: "",
  mustChangePass: false,

  setExpiresIn: (expiresIn: Date) => {
    set({ expiresIn });
  },
  setMustChangePass: (mustChangePass: boolean) => {
    set({ mustChangePass} );
  },
  setConfig: (config: any) => {
    set( {config});
  },
  getUserInfo: (user: any) => {
    set({ user });
  },

  saveUserInfo: (user: any) => set({ user }),
  rememberInfo: (isSaveInfo, username) => set({ isSaveInfo, username }),
  rememberSession: (refreshToken) => set({ refreshToken }),
});
