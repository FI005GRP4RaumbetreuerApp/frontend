import { FC, useState } from 'react'
import { AuthResponse, LoginPageComponents } from '../types'
import Input from './Input'
import { useRegister } from '../api'
import * as EmailValidator from 'email-validator'
import { useCookies } from 'react-cookie'

interface RegistrationProps {
  setCurrentComponentIndex: (component: LoginPageComponents) => void
}

const RegistrationForm: FC<RegistrationProps> = ({
  setCurrentComponentIndex,
}) => {
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [nameTag, setNameTag] = useState<string>('')
  const [emailIsInvalid, setEmailIsInvalid] = useState<boolean>(false)
  const [registerError, setRegisterError] = useState<boolean>(false)

  const [, setCookie] = useCookies(['access_token', 'refresh_token'])

  const register = useRegister()

  const registerUser = (): void => {
    try {
      register({
        email,
        password,
        firstName,
        lastName,
        nameTag,
      }).then(
        (response) => {
          setCookie('access_token', response.access_token)
          setCookie('refresh_token', response.refresh_token)
          setCurrentComponentIndex('RegistrationSuccessfull')
        },
        () => {
          setRegisterError(true)
        }
      )
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col h-156 w-4/5 xs:w-96 bg-white rounded-3xl items-center">
      <span className="text-gray-400 text-2xl mb-2 mt-8">Registrierung</span>

      <Input
        className={`w-4/5 ${registerError ? '' : 'mt-6'}`}
        errorMessage={
          registerError
            ? 'Registrierung war nicht erfolgreich, erneut probieren bitte.'
            : ''
        }
        placeHolder="Vorname"
        onChange={(value: string) => setFirstName(value)}
      />

      <Input
        className={`w-4/5 mt-6`}
        placeHolder="Nachname"
        onChange={(value: string) => setLastName(value)}
      />

      <Input
        className={`w-4/5 ${emailIsInvalid ? '' : 'mt-6'}`}
        errorMessage={
          emailIsInvalid
            ? 'Passwort Bestätigung stimmt mit dem Passwort überein'
            : ''
        }
        placeHolder="E-Mail"
        onChange={(value: string) => setEmail(value)}
      />

      <Input
        className={`w-4/5 mt-6`}
        placeHolder="Passwort"
        onChange={(value: string) => setPassword(value)}
      />

      <Input
        className={`w-4/5 mt-6`}
        placeHolder="Kürzel"
        maxLength={2}
        onChange={(value: string) => setNameTag(value)}
      />

      <div className="flex flex-col items-center w-3/5 gap-4 mt-8">
        <button
          className={`${
            !email ||
            !password ||
            !firstName ||
            !lastName ||
            !nameTag ||
            emailIsInvalid
              ? 'bg-gray-300 text-gray-500'
              : 'bg-primary text-white'
          }  w-full h-12 rounded-2xl text-xl`}
          disabled={
            !email ||
            !password ||
            !firstName ||
            !lastName ||
            !nameTag ||
            emailIsInvalid
          }
          onClick={() => {
            setEmailIsInvalid(!EmailValidator.validate(email))

            registerUser()
          }}
        >
          Registrieren
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

export default RegistrationForm
