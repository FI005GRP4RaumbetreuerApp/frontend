import axios from 'axios'
import { AuthResponse } from '../types'

type useLoginProps = {
  email: string
  password: string
}

const useLogin = (): (({
  email,
  password,
}: useLoginProps) => Promise<AuthResponse>) => {
  return async ({ email, password }: useLoginProps): Promise<AuthResponse> => {
    const requestBody = {
      email,
      password,
    }
    const useLoginResponse = await axios.post(
      'http://localhost:8080/api/v1/auth/login',
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    console.log(useLoginResponse)

    return useLoginResponse.data
  }
}

export default useLogin
