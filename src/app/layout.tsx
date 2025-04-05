import { Nunito } from 'next/font/google'
import './globals.css'
import Topbar from '@/components/base/topbar'
// import { Toaster } from "@/components/ui/sonner";
import GoogleAnalytics from '@/components/google-analytics'
// import { Toaster } from '@/components/ui/toaster'
import { Toaster } from 'react-hot-toast'
import { cn } from '@/lib/utils'
// import { ThemeProvider } from '@/context/theme-context'
import ErrorBoundary from './ErrorBoundary'
import { ResponsiveProvider } from '@/hooks/use-responsive'
const font = Nunito({ subsets: ['latin'] })

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className={cn('green', font.className)}
      style={{ scrollBehavior: 'smooth' }}
    >
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <ErrorBoundary>
          {/* <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'> */}
          <ResponsiveProvider>
            <Topbar />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#f6ded8',
                  color: '#F2542D'
                }
              }}
              containerStyle={{
                top: '77px'
              }}
            />

            {children}
          </ResponsiveProvider>
          {/* </ThemeProvider> */}
        </ErrorBoundary>
      </body>
    </html>
  )
}
