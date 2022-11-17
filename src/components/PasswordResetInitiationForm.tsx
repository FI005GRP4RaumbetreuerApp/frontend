import { FC, useState } from 'react'
import * as EmailValidator from 'email-validator'
import usePasswordForgot from '../api/usePasswordForgot'
import { LoginPageComponents } from '../types'
import Input from './Input'

interface PasswordResetInitiationFormProps {
  setCurrentComponentIndex: (component: LoginPageComponents) => void
}

const PasswordResetInitiationForm: FC<PasswordResetInitiationFormProps> = ({
  setCurrentComponentIndex,
}) => {
  const [email, setEmail] = useState<string>('')
  const [emailIsInvalid, setEmailIsInvalid] = useState<boolean>()
  const [emailDoesntExist, setEmailDoesntExist] = useState<boolean>(false)

  const forgotPassword = usePasswordForgot()

  const initiatePasswordForgot = (): void => {
    try {
      forgotPassword({ email }).then(
        (value: boolean) => {
          if (value) setCurrentComponentIndex('PasswordResetForm')
        },
        () => {
          setEmailDoesntExist(true)
        }
      )
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col h-96 w-4/5 xs:w-96 bg-white rounded-3xl items-center">
      <span className="text-gray-400 text-2xl mt-8">Passwort Reset</span>
      <div className="mt-8">
        <span className="text-left text-gray-400">
          Bitte geben Sie ihre E-Mail an
        </span>
      </div>

      <Input
        className={`w-4/5 ${
          emailIsInvalid || emailDoesntExist ? 'mt-2' : 'mt-8'
        }`}
        errorMessage={
          emailDoesntExist
            ? 'Die E-Mail konnte keinem Nutzer zugeordnet werden'
            : emailIsInvalid
            ? 'E-Mail hat das falsche Format'
            : ''
        }
        placeHolder="E-Mail"
        onChange={(value: string) => setEmail(value)}
      />

      <div className="flex flex-col items-center w-3/5 gap-4 mt-8">
        <button
          className={`${
            !email ? 'bg-gray-300 text-gray-500' : 'bg-primary text-white'
          }  w-full h-12 rounded-2xl text-xl`}
          disabled={!email}
          onClick={() => {
            setEmailIsInvalid(!EmailValidator.validate(email))
            if (EmailValidator.validate(email)) initiatePasswordForgot()
          }}
        >
          Absenden
        </button>
        <button
          className={'bg-primary text-white w-full h-12 rounded-2xl text-xl'}
          onClick={() => setCurrentComponentIndex('LoginForm')}
        >
          Zurück
        </button>
      </div>
    </div>
  )
}

export default PasswordResetInitiationForm
