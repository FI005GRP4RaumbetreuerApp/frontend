import axios from 'axios'
import { AuthResponse } from '../types/authResponse'

type useRegisterProps = {
  email: string
  password: string
  firstName: string
  lastName: string
  nameTag: string
}

const useRegister = (): (({
  email,
  password,
  firstName,
  lastName,
  nameTag,
}: useRegisterProps) => Promise<AuthResponse>) => {
  return async ({
    email,
    password,
    firstName,
    lastName,
    nameTag,
  }: useRegisterProps): Promise<AuthResponse> => {
    const requestBody = {
      email,
      vornamen: firstName,
      nachnamen: lastName,
      password,
      kürzel: nameTag,
    }
    const registrationResponse = await axios.post(
      'http://localhost:8080/api/v1/auth/register',
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    return registrationResponse.data
  }
}

export default useRegister
