import ContentSection from '../page'
import { AppearanceForm } from '@/components/base/settings/appearance-form'

export default function SettingsAppearance() {
  return (
    <ContentSection
      title='Appearance'
      desc='Customize the appearance of the app. Automatically switch between day
          and night themes.'
    >
      <AppearanceForm />
    </ContentSection>
  )
}
