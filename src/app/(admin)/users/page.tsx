"use client";

import LoadingPage from '@/components/loading/loading-page';
import dynamic from 'next/dynamic';

const UsersPage = dynamic(() => import('../../../components/lazyload/admin/users'), {
  loading: () => <LoadingPage className=''/>,
  ssr: false,
});

export default function Dashboard() {
  return (
    <>
      <UsersPage />
    </>
  )
}