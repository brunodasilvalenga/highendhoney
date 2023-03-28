import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'High end Honey',
  description: 'Your gateway to a world of high-end companionship',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}