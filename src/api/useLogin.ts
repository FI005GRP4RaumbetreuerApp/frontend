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
    const useLoginResponse = await axios.post('/api/v1/login', requestBody)

    return useLoginResponse.data
  }
}

export default useLogin
