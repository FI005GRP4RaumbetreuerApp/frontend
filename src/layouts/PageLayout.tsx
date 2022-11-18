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
      <div className="w-full flex flex-col h-full bg-backgroundGray justify-center items-center pb-20">
        {children}
      </div>
      <Footer />
    </div>
  )
}
