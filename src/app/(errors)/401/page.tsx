import UnauthorisedError from '@/components/errors/unauthorized-error'
import React from 'react'

export default function Err401() {
  return (
    <div>
      <UnauthorisedError />
    </div>
  )
}
