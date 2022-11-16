import { FC, useState } from 'react'
import * as EmailValidator from 'email-validator'

interface PasswordResetFormProps {
  setPasswortReseting: (reseting: boolean) => void
}

const PasswordResetForm: FC<PasswordResetFormProps> = ({
  setPasswortReseting,
}) => {
  const [email, setEmail] = useState<string>('')
  const [emailIsInvalid, setEmailIsInvalid] = useState<boolean>(false)

  return (
    <div className="flex flex-col h-96 w-4/5 xs:w-96 bg-white rounded-3xl items-center">
      <span className="text-gray-400 text-2xl mt-8">Passwort Reset</span>
      <div className="mt-8">
        <span className="text-left text-gray-400">
          Bitte geben Sie ihre E-Mail an
        </span>
      </div>

      <div className={`w-4/5 ${emailIsInvalid ? 'mt-2' : 'mt-8'}`}>
        <span
          className={`text-xs text-red-500 h-full ${
            emailIsInvalid ? '' : 'hidden'
          }`}
        >
          Passwort hat das falsche Format
        </span>
        <input
          className="w-full h-12 bg-backgroundGray rounded-xl text-gray-500 px-4"
          type="text"
          placeholder="E-Mail"
          onChange={(e) => {
            setEmail(e.currentTarget.value)
          }}
        />
      </div>

      <div className="flex flex-col items-center w-3/5 gap-4 mt-8">
        <button
          className={`${
            !email ? 'bg-gray-300 text-gray-500' : 'bg-primary text-white'
          }  w-full h-12 rounded-2xl text-xl`}
          disabled={!email}
          onClick={() => {
            setEmailIsInvalid(!EmailValidator.validate(email))
          }}
        >
          Absenden
        </button>
        <button
          className={'bg-primary text-white w-full h-12 rounded-2xl text-xl'}
          onClick={() => setPasswortReseting(false)}
        >
          Zurück
        </button>
      </div>
    </div>
  )
}

export default PasswordResetForm
