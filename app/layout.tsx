import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion',
  description: 'The Connected workspace where better faster work happen',
  //this media is to decide wheater your browser is in dark mode or light
  icons:[
    {
      media:"(prefers-color-scheme: light)",
      url:"/logo.svg",
      href:"/logo.svg"
    },
    {
      media:"(prefers-color-scheme: dark)",
      url:"/logo-dark.svg",
      href:"/logo-dark.svg"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //we have use suppressHydrationWarning bcs changing theme will cause warnings so to disable them.
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
        //these are all from shadcn documentation
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey='notion-theme'
        >
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
