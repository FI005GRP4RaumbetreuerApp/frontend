import { FC, useState } from 'react'
import useLogin from '../../api/useLogin'
import { LoginResponse } from '../../types'

export const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const login = useLogin()

  const authorizeLogin = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const loginResponse: LoginResponse = await login({ email, password })

      console.log(loginResponse)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col bg-primary h-32 w-full justify-center items-center">
        <span className=" text-white   sm:text-4xl xs:text-3xl text-2xl">
          Georg-Simon-Ohm-Berufskolleg
        </span>
      </div>
      <div className="flex flex-col w-full h-full bg-backgroundGray justify-center items-center">
        <div className="flex flex-col h-80 w-4/5 xs:w-96 bg-white rounded-3xl items-center gap-7">
          <span className="text-gray-400 text-2xl mt-8">
            Login-Raumbetreuer
          </span>

          <input
            className="w-4/5 h-12 bg-backgroundGray rounded-xl text-gray-500 px-4"
            type="text"
            placeholder="E-Mail"
            onClick={(e) => {
              setEmail(e.currentTarget.value)
            }}
          />

          <input
            className="w-4/5 h-12 bg-backgroundGray rounded-xl text-gray-800 px-4"
            type="text"
            placeholder="Passwort"
            onClick={(e) => {
              setPassword(e.currentTarget.value)
            }}
          />
          <button
            className="bg-primary w-3/5 h-12 rounded-3xl text-white text-xl"
            onClick={() => authorizeLogin(email, password)}
          >
            Anmelden
          </button>
        </div>
      </div>
      <div className="flex flex-col h-12 bg-black self-bottom text-xs justify-center items-center">
        <span className="text-white">©Georg-Simon-Ohm Berufskolleg 2022</span>
      </div>
    </div>
  )
}
