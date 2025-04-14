import { Suspense } from 'react'
import ArchiveClient from './ArchiveClient'

export default function ArchivePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArchiveClient />
    </Suspense>
  )
}
