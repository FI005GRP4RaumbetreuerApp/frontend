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
    <div className={`flex flex-col min-h-screen`}>
      <Header showHeaderButtons={showHeaderButtons} />
      <div className="flex flex-col w-full flex-1 bg-backgroundGray justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  )
}
