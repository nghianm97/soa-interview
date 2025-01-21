'use client'

import LoadingPage from '@/components/loading/loading-page'
import dynamic from 'next/dynamic'

const Courses = dynamic(
  () => import('../../../components/lazyload/course/course'),
  {
    loading: () => <LoadingPage className="" />,
    ssr: false
  }
)

export default function Dashboard() {
  return (
    <>
      <Courses />
    </>
  )
}
