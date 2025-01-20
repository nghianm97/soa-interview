import dynamic from 'next/dynamic';
import ContentSection from '../page'
import LoadingComponentPage from '@/components/loading/loading-component';
import { AccountForm } from '@/components/base/settings/account-form';

// const AccountForm = dynamic(() => import('@/components/base/settings/account-form'), {
//   loading: () => <LoadingComponentPage className=''/>,
//   ssr: false,
// });

export default function SettingsAccount() {
  return (
    <ContentSection
      title='Account'
      desc='Update your account settings. Set your preferred language and
          timezone.'
    >
      <AccountForm />
    </ContentSection>
  )
}
