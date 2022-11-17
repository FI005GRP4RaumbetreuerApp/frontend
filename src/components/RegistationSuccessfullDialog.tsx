import { FC } from 'react'
import { LoginPageComponents } from '../types'

interface RegistationSuccessfullDialogProps {
  setCurrentComponentIndex: (component: LoginPageComponents) => void
}

const RegistationSuccessfullDialog: FC<RegistationSuccessfullDialogProps> = ({
  setCurrentComponentIndex,
}) => {
  return (
    <div className="flex flex-col h-80 w-4/5 xs:w-96 bg-white rounded-3xl items-center">
      <span className="text-gray-400 text-2xl mt-8">Registrierung</span>
      <div className="mt-8 text-center px-4">
        <span className="text-left text-gray-400 mb-4">
          Ihre Registrierung war erfolgreich !
        </span>
        <span className="text-left text-gray-400">
          <br />
          <br />
          Auf der Login-Seite können Sie sich mit den neuen Daten anmelden
        </span>
      </div>

      <div className="flex flex-col items-center w-3/5 gap-4 mt-8">
        <button
          className={'bg-primary text-white w-full h-12 rounded-2xl text-xl'}
          onClick={() => setCurrentComponentIndex('LoginForm')}
        >
          Zur Anmeldung
        </button>
      </div>
    </div>
  )
}

export default RegistationSuccessfullDialog
