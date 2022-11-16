import { FC, useState } from 'react'
import { LoginForm } from '../../components'
import PasswordResetForm from '../../components/PasswordResetForm'

export const LoginPage: FC = () => {
  const [emailIsInvalid, setEmailIsInvalid] = useState<boolean>(false)
  const [passwortReseting, setPasswortReseting] = useState<boolean>(false)

  console.log(emailIsInvalid)

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col bg-primary h-32 w-full justify-center items-center">
        <span className=" text-white   sm:text-4xl xs:text-3xl text-2xl">
          Georg-Simon-Ohm-Berufskolleg
        </span>
      </div>
      <div className="flex flex-col w-full h-full bg-backgroundGray justify-center items-center">
        {passwortReseting ? (
          <PasswordResetForm setPasswortReseting={setPasswortReseting} />
        ) : (
          <LoginForm
            emailIsInvalid={emailIsInvalid}
            setEmailIsInvalid={setEmailIsInvalid}
            setPasswordReseting={setPasswortReseting}
          />
        )}
      </div>
      <div className="flex flex-col h-12 bg-black self-bottom text-xs justify-center items-center">
        <span className="text-white">©Georg-Simon-Ohm Berufskolleg 2022</span>
      </div>
    </div>
  )
}
