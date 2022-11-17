import axios from 'axios'
import { Report } from '../types'

interface useGetRoomReportsProps {
  accessToken: string
}

const useGetRoomReports = (): (({
  accessToken,
}: useGetRoomReportsProps) => Promise<Report[]>) => {
  return async ({ accessToken }: useGetRoomReportsProps): Promise<Report[]> => {
    const useGetRoomReportsResponse = await axios.get(
      'http://144.76.118.243:8080/api/v1/meldungen/get/room/{room_id}',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    )

    return useGetRoomReportsResponse.data
  }
}

export default useGetRoomReports
