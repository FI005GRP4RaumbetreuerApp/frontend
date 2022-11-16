import { FC, useState } from 'react'
import { LoginForm } from '../../components'
import PasswordResetForm from '../../components/PasswordResetForm'
import PageLayout from '../../layouts'

export const LoginPage: FC = () => {
  const [emailIsInvalid, setEmailIsInvalid] = useState<boolean>(false)
  const [passwortReseting, setPasswortReseting] = useState<boolean>(false)

  return (
    <PageLayout showHeaderButtons={false}>
      {passwortReseting ? (
        <PasswordResetForm setPasswortReseting={setPasswortReseting} />
      ) : (
        <LoginForm
          emailIsInvalid={emailIsInvalid}
          setEmailIsInvalid={setEmailIsInvalid}
          setPasswordReseting={setPasswortReseting}
        />
      )}
    </PageLayout>
  )
}
