"use client";

import LoadingPage from '@/components/loading/loading-page';
import dynamic from 'next/dynamic';

const DashboardPage = dynamic(() => import('../../../components/lazyload/admin/dashboard'), {
  loading: () => <LoadingPage className=''/>,
  ssr: false,
});

export default function Dashboard() {
  return (
    <>
      <DashboardPage />
    </>
  )
}