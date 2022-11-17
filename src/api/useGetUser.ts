import axios from 'axios'
import { Room, User } from '../types'

interface useGetUserProps {
  accessToken: string
}

const useGetUser = (): (({
  accessToken,
}: useGetUserProps) => Promise<User>) => {
  return async ({ accessToken }: useGetUserProps): Promise<User> => {
    const useGetUserResponse = await axios.get(
      'http://144.76.118.243:8080/api/v1/user/get/own',
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
