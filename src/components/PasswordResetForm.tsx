import { FC, useEffect, useState } from 'react'
import { LoginPageComponents } from '../types'
import Input from './Input'
import { usePasswordReset } from '../api'

interface PasswordResetFormProps {
  setCurrentComponentIndex: (component: LoginPageComponents) => void
}

const PasswordResetForm: FC<PasswordResetFormProps> = ({
  setCurrentComponentIndex,
}) => {
  const [password, setPassword] = useState<string>('')
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')
  const [authenticationCode, setAuthenticationCode] = useState<string>('')
  const [passwordsNotSame, setPasswordNotSame] = useState<boolean>(false)
  const [authenticationCodeIsWrong, setAuthenticationCodeIsWrong] =
    useState<boolean>(false)

  useEffect(() => {
    if (password && passwordConfirmation) {
      setPasswordNotSame(password !== passwordConfirmation)
    } else {
      setPasswordNotSame(false)
    }
  }, [password, passwordConfirmation])

  const passwordReset = usePasswordReset()

  const initiatePasswordReset = (): void => {
    try {
      passwordReset({
        password,
        passwordConfirmation,
        authenticationCode,
      }).then(
        (value: boolean) => {
          if (value) setCurrentComponentIndex('ResetSuccessfullDialog')
        },
        () => {
          setAuthenticationCodeIsWrong(true)
        }
      )
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col h-128 w-4/5 xs:w-96 bg-white rounded-3xl items-center">
      <span className="text-gray-400 text-2xl mt-8">Passwort Reset</span>
      <div className="mt-6 text-center text-xs mb-2">
        <span className="text-gray-400">
          An die angegebene E-Mail wurde ein Authentifizierungscode gesendet
        </span>
      </div>

      <Input
        className={`w-4/5 ${
          passwordsNotSame || authenticationCodeIsWrong ? '' : 'mt-6'
        }`}
        errorMessage={
          passwordsNotSame
            ? 'Passwort Bestätigung stimmt mit dem Passwort überein'
            : authenticationCodeIsWrong
            ? 'Der Authentifizierungscode ist falsch'
            : ''
        }
        placeHolder="Passwort"
        onChange={(value: string) => setPassword(value)}
      />

      <Input
        className={`w-4/5 mt-6`}
        placeHolder="Passwort bestätigen"
        onChange={(value: string) => setPasswordConfirmation(value)}
      />

      <Input
        className={`w-4/5 mt-6`}
        placeHolder="Authentifizierungscode"
        onChange={(value: string) => setAuthenticationCode(value)}
      />

      <div className="flex flex-col items-center w-3/5 gap-4 mt-8">
        <button
          className={`${
            !password ||
            !passwordConfirmation ||
            passwordsNotSame ||
            !authenticationCode
              ? 'bg-gray-300 text-gray-500'
              : 'bg-primary text-white'
          }  w-full h-12 rounded-2xl text-xl`}
          disabled={
            !password ||
            !passwordConfirmation ||
            passwordsNotSame ||
            !authenticationCode
          }
          onClick={() => {
            console.log('LOL')

            initiatePasswordReset()
          }}
        >
          Passwort Zurücksetzen
        </button>
        <button
          className={'bg-primary text-white w-full h-12 rounded-2xl text-xl'}
          onClick={() => {
            setCurrentComponentIndex('LoginForm')
          }}
        >
          Abbrechen
        </button>
      </div>
    </div>
  )
}

export default PasswordResetForm
