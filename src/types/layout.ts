import { ReactElement } from 'react';

export type IBreadcrumb = {
  id: string,
  name: string,
  link: ReactElement
}

export interface ContentLayoutProps {
  title?: string;
  children: React.ReactNode;
  arrBreadCrumb: IBreadcrumb[];
}

export interface NavbarProps {
  title: string;
  arrBreadCrumb?: IBreadcrumb[];
}