import axios from 'axios'
import { useCookies } from 'react-cookie'
import { User } from '../types'

const useGetUser = (): (() => Promise<User[]>) => {
  return async (): Promise<User[]> => {
    const [cookies] = useCookies(['access_token'])

    const useGetUserResponse = await axios.get(
      'http://144.76.118.243:8080/api/v1/user/get/own',
      {
        headers: {
          authorization: 'Bearer ' + cookies.access_token,
        },
      }
    )

    return useGetUserResponse.data
  }
}

export default useGetUser
