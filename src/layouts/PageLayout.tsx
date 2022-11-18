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
    <div className={`flex flex-col h-screen`}>
      <Header showHeaderButtons={showHeaderButtons} />
      <div className="w-full h-full flex flex-col bg-backgroundGray justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  )
}
