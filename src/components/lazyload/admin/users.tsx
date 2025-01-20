import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/base/profile-dropdown'
import { Search } from '@/components/base/search'
import { ThemeSwitch } from '@/components/base/theme-switch'
import { columns } from '@/components/base/users/users-columns'
import { UsersDialogs } from '@/components/base/users/users-dialogs'
import { UsersPrimaryButtons } from '@/components/base/users/users-primary-buttons'
import { UsersTable } from '@/components/base/users/users-table'
import UsersProvider from '@/context/users-context'
import { userListSchema } from '@/schema/users-schema'
import { users } from '@/mock-data/users'

export default function UsersLazyAdmin() {
  // Parse user list
  const userList = userListSchema.parse(users)

  return (
    <UsersProvider>
      <Header fixed>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex items-center justify-between space-y-2 flex-wrap'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>User List</h2>
            <p className='text-muted-foreground'>
              Manage your users and their roles here.
            </p>
          </div>
          <UsersPrimaryButtons />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <UsersTable data={userList} columns={columns} />
        </div>
      </Main>

      <UsersDialogs />
    </UsersProvider>
  )
}
