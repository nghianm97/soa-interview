'use client'

import ContentSection from '../page'
import { AccountForm } from '@/components/base/settings/account-form'

export default function SettingsAccount() {
  return (
    <ContentSection
      title="Account"
      desc="Update your account settings. Set your preferred language and
          timezone."
    >
      <AccountForm />
    </ContentSection>
  )
}
