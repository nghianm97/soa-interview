'use client'

import LoadingPage from '@/components/loading/loading-page'
import dynamic from 'next/dynamic'

const ChatsPage = dynamic(
  () => import('../../../components/lazyload/admin/chats'),
  {
    loading: () => <LoadingPage className="" />,
    ssr: false
  }
)

export default function Dashboard() {
  return (
    <>
      <ChatsPage />
    </>
  )
}
