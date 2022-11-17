import { FC, useState } from 'react'
import {
  LoginForm,
  PasswordResetInitiationForm,
  PasswordResetSuccessfullDialog,
} from '../../components'
import PasswordResetForm from '../../components/PasswordResetForm'
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
      ) : (
        <LoginForm
          setCurrentComponentIndex={setCurrentComponentIndex}
          setRedirectIsAllowed={setRedirectIsAllowed}
        />
      )}
    </PageLayout>
  )
}
