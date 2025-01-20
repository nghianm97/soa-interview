import ContentSection from '../page'
import { DisplayForm } from '@/components/base/settings/display-form'

export default function SettingsDisplay() {
  return (
    <ContentSection
      title='Display'
      desc="Turn items on or off to control what's displayed in the app."
    >
      <DisplayForm />
    </ContentSection>
  )
}
