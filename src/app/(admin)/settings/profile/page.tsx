import ContentSection from '../page'
import ProfileForm from '@/components/base/settings/profile-form'

export default function SettingsProfile() {
  return (
    <ContentSection
      title='Profile'
      desc='This is how others will see you on the site.'
    >
      <ProfileForm />
    </ContentSection>
  )
}
