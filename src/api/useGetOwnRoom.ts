import axios from 'axios'
import { Room } from '../types'

interface useGetOwnRoomProps {
  accessToken: string
}

const useGetOwnRoom = (): (({
  accessToken,
}: useGetOwnRoomProps) => Promise<Room[]>) => {
  return async ({ accessToken }: useGetOwnRoomProps): Promise<Room[]> => {
    const useGetRoomResponse = await axios.get(
      'http://144.76.118.243:8080/api/v1/raum/get/own',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    )

    return useGetRoomResponse.data
  }
}

export default useGetOwnRoom
