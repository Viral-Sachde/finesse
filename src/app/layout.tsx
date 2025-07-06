import './globals.css'
import type { Metadata } from 'next'
import SmoothScrollProvider from '@/components/animation/SmoothScrollProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import ClientProviders from '@/components/providers/ClientProviders'

export const metadata: Metadata = {
  title: 'The Finesse Co | Absolute Tech Building, No BS, Just Product',
  description: 'At The Finesse Co, we build next-gen digital products that transform businesses. From scalable software to smart systems — your idea, our code.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientProviders>
            <SmoothScrollProvider>
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </SmoothScrollProvider>
          </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  )
}
