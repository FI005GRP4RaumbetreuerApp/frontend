import axios from 'axios'
import { Room } from '../types'

interface useGetRoomsProps {
  accessToken: string
}

const useGetRooms = (): (({
  accessToken,
}: useGetRoomsProps) => Promise<Room[]>) => {
  return async ({ accessToken }: useGetRoomsProps): Promise<Room[]> => {
    const useGetRoomResponse = await axios.get(
      'http://localhost:8080/api/v1/raum/get/all',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    )

    return useGetRoomResponse.data
  }
}

export default useGetRooms
