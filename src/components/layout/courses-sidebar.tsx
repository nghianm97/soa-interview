import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'
import { NavGroup } from '@/components/layout/nav-group'
import { sidebarCourese } from './data/sidebar-data'
import Image from 'next/image'

export function CoursesSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader className="flex items-center justify-center">
        <Image alt="" src={'/gkebook-logo.png'} width={60} height={30} />
      </SidebarHeader>
      <SidebarContent>
        {sidebarCourese.navGroups?.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
