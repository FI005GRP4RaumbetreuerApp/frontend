import axios from 'axios'

type usePasswordForgotProps = {
  email: string
}

const usePasswordForgot = (): (({
  email,
}: usePasswordForgotProps) => Promise<boolean>) => {
  return async ({ email }: usePasswordForgotProps): Promise<boolean> => {
    const requestBody = {
      email,
    }
    const passwordForgotResponse = await axios.post(
      'http://localhost:8080/api/v1/auth/forgotpassword',
      requestBody
    )

    return passwordForgotResponse.status === 200 ? true : false
  }
}

export default usePasswordForgot
