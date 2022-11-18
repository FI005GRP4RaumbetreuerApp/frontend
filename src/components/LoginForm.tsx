import { FC, useState } from 'react'
import { LoginPageComponents, AuthResponse } from '../types'
import * as EmailValidator from 'email-validator'
import { useLogin } from '../api'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import Input from './Input'

interface LoginFormProps {
  setCurrentComponentIndex: (componentName: LoginPageComponents) => void
  setRedirectIsAllowed: (isAllowed: boolean) => void
}

const LoginForm: FC<LoginFormProps> = ({
  setCurrentComponentIndex,
  setRedirectIsAllowed,
}) => {
  const login = useLogin()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailIsInvalid, setEmailIsInvalid] = useState<boolean>(false)
  const [credentialsWrong, setCredentialsWrong] = useState<boolean>(false)

  const history = useHistory()

  const [, setCookie] = useCookies(['access_token', 'refresh_token'])

  const authorizeLogin = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const loginResponse: AuthResponse = await login({ email, password })

      if (loginResponse) {
        setCookie('access_token', loginResponse.access_token)
        setCookie('refresh_token', loginResponse.refresh_token)

        setRedirectIsAllowed(true)
        history.push('/overview')
      }
    } catch (e) {
      if (e.response.status === 401) setCredentialsWrong(true)
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col h-96 w-4/5 xs:w-96 bg-white rounded-3xl items-center">
      <span className="text-gray-400 text-2xl mt-8">Login-Raumbetreuer</span>

      <Input
        className={`w-4/5 ${
          emailIsInvalid || credentialsWrong ? 'mt-2' : 'mt-8'
        }`}
        errorMessage={
          emailIsInvalid
            ? 'E-Mail hat das falsche Format'
            : credentialsWrong
            ? 'Passwort oder die Email ist falsch'
            : ''
        }
        placeHolder="E-Mail"
        onChange={(value: string) => setEmail(value)}
      />

      <Input
        className={'w-4/5 mt-8'}
        placeHolder="Passwort"
        type="password"
        onChange={(value: string) => setPassword(value)}
      />

      <div className="flex flex-col items-center w-3/5 gap-4 mt-8">
        <button
          className={`${
            !email || !password
              ? 'bg-gray-300 text-gray-500'
              : 'bg-primary text-white'
          }  w-full h-12 rounded-2xl text-xl`}
          disabled={!email || !password}
          onClick={() => {
            setEmailIsInvalid(!EmailValidator.validate(email))

            if (!emailIsInvalid) authorizeLogin(email, password)
          }}
        >
          Anmelden
        </button>
        <div className="flex flex-col items-center">
          <button
            className="cursor-pointer text-gray-500 hover:text-primary"
            onClick={() =>
              setCurrentComponentIndex('PasswordResetInitiationForm')
            }
          >
            Passwort zurücksetzen
          </button>
          <button
            className="cursor-pointer text-gray-500 hover:text-primary"
            onClick={() => setCurrentComponentIndex('RegistrationForm')}
          >
            Registrieren
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
