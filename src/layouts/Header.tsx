import { FC } from 'react'

interface HeaderProps {
  showHeaderButtons: boolean
}

const Header: FC<HeaderProps> = ({ showHeaderButtons }) => {
  return (
    <div className="flex flex-col bg-primary h-32 w-full justify-center items-center">
      <span className=" text-white   sm:text-4xl xs:text-3xl text-2xl">
        Georg-Simon-Ohm-Berufskolleg
      </span>
    </div>
  )
}

export default Header
