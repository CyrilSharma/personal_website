import './globals.css'
import NavBar from '../components/NavBar'
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
