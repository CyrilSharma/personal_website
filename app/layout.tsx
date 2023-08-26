import './globals.css'
import NavBar from '../components/NavBar'
import Image from 'next/image';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <NavBar></NavBar>
        <main>{children}</main>
      </body>
    </html>
  )
}
