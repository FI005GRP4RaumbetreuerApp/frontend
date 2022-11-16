import axios from 'axios'

type usePasswordResetProps = {
  email: string
}

const usePasswordReset = (): (({
  email,
}: usePasswordResetProps) => Promise<{ resetSuccessful: boolean }>) => {
  return async ({
    email,
  }: usePasswordResetProps): Promise<{ resetSuccessful: boolean }> => {
    const requestBody = {
      email,
    }
    const usePasswordReset = await axios.post(
      '144.76.118.243:8080/api/v1/auth/passwordReset',
      requestBody
    )

    return usePasswordReset.data
  }
}

export default usePasswordReset
