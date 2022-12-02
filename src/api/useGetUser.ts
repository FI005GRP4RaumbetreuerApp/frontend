import axios from 'axios'
import { User } from '../types'

interface useGetUserProps {
  accessToken: string
}

const useGetUser = (): (({
  accessToken,
}: useGetUserProps) => Promise<User>) => {
  return async ({ accessToken }: useGetUserProps): Promise<User> => {
    const useGetUserResponse = await axios.get(
      'http://localhost:8080/api/v1/user/get/own',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    )

    return useGetUserResponse.data
  }
}

export default useGetUser
