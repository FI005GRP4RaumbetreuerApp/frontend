import { FC, ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface PageLayoutProps {
  children: ReactNode
  showHeaderButtons: boolean
}
export const PageLayout: FC<PageLayoutProps> = ({
  children,
  showHeaderButtons = false,
}) => {
  return (
    <div
      className={`flex flex-col ${
        showHeaderButtons ? 'min-h-screen' : 'h-screen'
      }`}
    >
      <Header showHeaderButtons={showHeaderButtons} />
      <div className="flex flex-col w-full h-full bg-backgroundGray justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  )
}
