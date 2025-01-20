'use client'

import LoadingPage from '@/components/loading/loading-page'
import dynamic from 'next/dynamic'

const TasksPage = dynamic(
  () => import('../../../components/lazyload/admin/tasks'),
  {
    loading: () => <LoadingPage className="" />,
    ssr: false
  }
)

export default function Dashboard() {
  return (
    <>
      <TasksPage />
    </>
  )
}
