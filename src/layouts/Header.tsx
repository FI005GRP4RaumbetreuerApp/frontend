import { FC } from 'react'
import Dropdown from '../components/Dropdown'

interface HeaderProps {
  showHeaderButtons: boolean
}

const Header: FC<HeaderProps> = ({ showHeaderButtons }) => {
  return (
    <div className="flex flex-row bg-primary justify-center">
      {showHeaderButtons == false && (
        <span className="m-6 text-white sm:text-4xl xs:text-xl text-2xl">
          Georg-Simon-Ohm-Berufskolleg
        </span>
      )}
      {showHeaderButtons == true && (
        <div className="flex flex-row bg-primary m-6 w-full justify-around">
          <span className="flex text-white text-4xl">Max Mustermann</span>
          <div className="flex gap-6">
            <Dropdown />
            <button className="bg-secondary w-32 h-12 rounded-3xl text-white text-xl">
              Ausloggen
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
