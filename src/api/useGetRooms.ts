import axios from 'axios'
import { useCookies } from 'react-cookie'
import { Room } from '../types'

const useGetRooms = (): (() => Promise<Room[]>) => {
  return async (): Promise<Room[]> => {
    const [cookies] = useCookies(['access_token'])

    const useGetRoomResponse = await axios.get(
      'http://144.76.118.243:8080/api/v1/raum/get/all',
      {
        headers: {
          authorization: 'Bearer ' + cookies.access_token,
        },
      }
    )

    return useGetRoomResponse.data
  }
}

export default useGetRooms
