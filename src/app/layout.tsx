import { Nunito } from 'next/font/google'
import './globals.css'
import Topbar from '@/components/base/topbar'
// import { Toaster } from "@/components/ui/sonner";
import GoogleAnalytics from '@/components/google-analytics'
import { Toaster } from '@/components/ui/toaster'
const font = Nunito({ subsets: ['latin'] })

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className={font.className}
      style={{ scrollBehavior: 'smooth' }}
    >
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <Topbar />
        <Toaster />

        {/* <SelectClassModal /> */}
        {/* <Toaster position="top-right" /> */}
        {children}
      </body>
    </html>
  )
}
