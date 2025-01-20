import ContentSection from '../page'
import { NotificationsForm } from '@/components/base/settings/notifications-form'

export default function SettingsNotifications() {
  return (
    <ContentSection
      title='Notifications'
      desc='Configure how you receive notifications.'
    >
      <NotificationsForm />
    </ContentSection>
  )
}
