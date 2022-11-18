import { FC } from 'react'
import Dropdown from '../components/Dropdown'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
import React from 'react'
import AppContext from '../AppContext'

interface HeaderProps {
  showHeaderButtons: boolean
}

const Header: FC<HeaderProps> = ({ showHeaderButtons = false }) => {
  const [, , removeCookie] = useCookies(['access_token'])
  const history = useHistory()

  const { userData } = React.useContext(AppContext)

  return (
    <div className="flex flex-row bg-primary justify-center">
      {showHeaderButtons == false && (
        <span className="m-6 text-white sm:text-4xl xs:text-xl text-2xl">
          Georg-Simon-Ohm-Berufskolleg
        </span>
      )}
      {showHeaderButtons == true && (
        <div className="flex flex-row bg-primary m-6 w-full justify-around">
          <span className="flex text-white text-4xl">Raumbetreuer App</span>
          <div className="flex gap-6">
            <Dropdown />
            <button
              className="bg-secondary w-32 h-12 rounded-3xl text-white text-xl"
              onClick={() => {
                removeCookie('access_token')
                history.push('/')
              }}
            >
              Ausloggen
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
