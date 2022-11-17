import axios from 'axios'

type usePasswordResetProps = {
  password: string
  passwordConfirmation: string
  authenticationCode: string
}

const usePasswordReset = (): (({
  password,
  passwordConfirmation,
  authenticationCode,
}: usePasswordResetProps) => Promise<boolean>) => {
  return async ({
    password,
    passwordConfirmation,
    authenticationCode,
  }: usePasswordResetProps): Promise<boolean> => {
    const requestBody = {
      new_password: password,
      new_password_conformation: passwordConfirmation,
      reset_code: authenticationCode,
    }
    const passwordResetResponse = await axios.post(
      'http://144.76.118.243:8080/api/v1/auth/resetpassword',
      requestBody
    )

    return passwordResetResponse.status === 200 ? true : false
  }
}

export default usePasswordReset
