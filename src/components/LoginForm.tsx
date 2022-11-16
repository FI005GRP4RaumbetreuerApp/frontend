import { FC, useState } from 'react'
import { LoginResponse } from '../types'
import * as EmailValidator from 'email-validator'
import { useLogin } from '../api'
import { useHistory } from 'react-router-dom'

interface LoginFormProps {
  emailIsInvalid: boolean
  setEmailIsInvalid: (isInvalid: boolean) => void
  setPasswordReseting: (reseting: boolean) => void
}

const LoginForm: FC<LoginFormProps> = ({
  emailIsInvalid,
  setEmailIsInvalid,
  setPasswordReseting,
}) => {
  const login = useLogin()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const history = useHistory()

  const authorizeLogin = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const loginResponse: LoginResponse = await login({ email, password })
      if (loginResponse) history.push('/overview')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col h-96 w-4/5 xs:w-96 bg-white rounded-3xl items-center">
      <span className="text-gray-400 text-2xl mt-8">Login-Raumbetreuer</span>

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

      <input
        className="w-4/5 h-12 bg-backgroundGray rounded-xl text-gray-500 px-4 mt-8"
        type="password"
        placeholder="Passwort"
        onChange={(e) => {
          setPassword(e.currentTarget.value)
        }}
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
        <button
          className="cursor-pointer text-gray-500 hover:text-primary"
          onClick={() => setPasswordReseting(true)}
        >
          Passwort Zurücksetzen
        </button>
      </div>
    </div>
  )
}

export default LoginForm
