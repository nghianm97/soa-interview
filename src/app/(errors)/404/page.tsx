import NotFoundError from '@/components/errors/not-found-error'
import React from 'react'

export default function Err404() {
  return (
    <div>
      <NotFoundError />
    </div>
  )
}
