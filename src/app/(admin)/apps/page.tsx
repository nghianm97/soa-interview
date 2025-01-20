'use client'

import LoadingPage from '@/components/loading/loading-page'
import dynamic from 'next/dynamic'

const AppsPage = dynamic(
  () => import('../../../components/lazyload/admin/apps'),
  {
    loading: () => <LoadingPage className="" />,
    ssr: false
  }
)

export default function Dashboard() {
  return (
    <>
      <AppsPage />
    </>
  )
}
