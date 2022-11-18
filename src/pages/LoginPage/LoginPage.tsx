import { FC, useState } from 'react'
import {
  LoginForm,
  PasswordResetInitiationForm,
  PasswordResetSuccessfullDialog,
  RegistationSuccessfullDialog,
} from '../../components'
import PasswordResetForm from '../../components/PasswordResetForm'
import RegistrationForm from '../../components/RegistrationForm'
import PageLayout from '../../layouts'
import { LoginPageComponents } from '../../types'

interface LoginPageProps {
  setRedirectIsAllowed: (isAllowed: boolean) => void
}

export const LoginPage: FC<LoginPageProps> = ({ setRedirectIsAllowed }) => {
  const [currentComponentIndex, setCurrentComponentIndex] =
    useState<LoginPageComponents>('LoginForm')

  return (
    <PageLayout showHeaderButtons={false}>
      <div className="h-screen flex items-center">
        {currentComponentIndex === 'PasswordResetInitiationForm' ? (
          <PasswordResetInitiationForm
            setCurrentComponentIndex={setCurrentComponentIndex}
          />
        ) : currentComponentIndex === 'PasswordResetForm' ? (
          <PasswordResetForm
            setCurrentComponentIndex={setCurrentComponentIndex}
          />
        ) : currentComponentIndex === 'ResetSuccessfullDialog' ? (
          <PasswordResetSuccessfullDialog
            setCurrentComponentIndex={setCurrentComponentIndex}
          />
        ) : currentComponentIndex === 'RegistrationForm' ? (
          <RegistrationForm
            setCurrentComponentIndex={setCurrentComponentIndex}
          />
        ) : currentComponentIndex === 'RegistrationSuccessfull' ? (
          <RegistationSuccessfullDialog
            setCurrentComponentIndex={setCurrentComponentIndex}
          />
        ) : (
          <LoginForm
            setCurrentComponentIndex={setCurrentComponentIndex}
            setRedirectIsAllowed={setRedirectIsAllowed}
          />
        )}
      </div>
    </PageLayout>
  )
}
