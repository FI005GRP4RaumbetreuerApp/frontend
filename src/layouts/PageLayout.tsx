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
    <div className={`flex flex-col h-screen overflow-y-auto`}>
      <Header showHeaderButtons={showHeaderButtons} />
      <div className="w-full flex flex-col bg-backgroundGray justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  )
}
