import axios from 'axios'
import { AuthResponse } from '../types/authResponse'

type useRegistrationProps = {
  email: string
  password: string
  firstName: string
  lastName: string
  nameTag: string
}

const useRegistration = (): (({
  email,
  password,
  firstName,
  lastName,
}: useRegistrationProps) => Promise<AuthResponse>) => {
  return async ({
    email,
    password,
    firstName,
    lastName,
  }: useRegistrationProps): Promise<AuthResponse> => {
    const requestBody = {
      email,
      vornamen: firstName,
      nachnamen: lastName,
      password,
    }
    const registrationResponse = await axios.post(
      'http://144.76.118.243:8080/api/v1/auth/register',
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

useRegistration
