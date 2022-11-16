import axios from 'axios'
import { LoginResponse } from '../types/loginResponse'

type useLoginProps = {
  email: string
  password: string
}

const useLogin = (): (({
  email,
  password,
}: useLoginProps) => Promise<LoginResponse>) => {
  return async ({ email, password }: useLoginProps): Promise<LoginResponse> => {
    const requestBody = {
      email,
      password,
    }
    const useLoginResponse = await axios.post(
      'http://144.76.118.243:8080/api/v1/auth/login',
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    return useLoginResponse.data
  }
}

export default useLogin
