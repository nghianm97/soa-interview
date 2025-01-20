import { Group } from "@/types/auth/menu";
import {
  LuSettings,
  LuGlobe,
  LuLibrary,
  LuGraduationCap,
  LuFile,
  LuAtom,
  LuEllipsis,
  LuClock2,
  LuCaptions,
  LuWandSparkles,
} from "react-icons/lu";

export function getMenuList(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/home-admin",
          label: "Khám Phá",
          icon: LuGlobe,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/categories",
          label: "Thư viện",
          icon: LuLibrary,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/collection",
          label: "Bộ sưu tập",
          icon: LuAtom,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/graduation",
          label: "Lớp",
          icon: LuGraduationCap,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/report",
          label: "Báo cáo",
          icon: LuFile,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/settings",
          label: "Cài đặt",
          icon: LuSettings,
          submenus: [],
        },
      ],
    },
  ];
}

export function getMenuListQuestion(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/home-admin",
          label: "Thêm câu hỏi tương tự",
          icon: LuWandSparkles,
          submenus: [],
        },
        {
          href: "/categories",
          label: "Thêm giải thích",
          icon: LuWandSparkles,
          submenus: [],
        },
        {
          href: "/collection",
          label: "Thêm tuỳ chọn",
          icon: LuEllipsis,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Cài đặt của từng câu",
      menus: [
        {
          href: "",
          label: "Thời gian trả lời",
          icon: LuClock2,
          submenus: [
            {
              href: "/posts",
              label: "All Posts",
            },
            {
              href: "/posts/new",
              label: "New Post",
            },
          ],
        },
        {
          href: "",
          label: "Điểm",
          icon: LuCaptions,
          submenus: [
            {
              href: "/posts",
              label: "All Posts",
            },
            {
              href: "/posts/new",
              label: "New Post",
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Tải lên tài liệu",
      menus: [
        {
          href: "/users",
          label: "Biểu mẫu google",
          icon: LuSettings,
          submenus: [
            {
              href: "/posts",
              label: "All Posts",
            },
            {
              href: "/posts/new",
              label: "New Post",
            },
          ],
        },
        {
          href: "/account",
          label: "Bảng tính",
          icon: LuSettings,
          submenus: [
            {
              href: "/posts",
              label: "All Posts",
            },
            {
              href: "/posts/new",
              label: "New Post",
            },
          ],
        },
      ],
    },
  ];
}
