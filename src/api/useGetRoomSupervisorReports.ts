import axios from 'axios'
import { Report } from '../types'

interface useGetRoomSupervisorReportsProps {
  accessToken: string
}

const useGetRoomSupervisorReports = (): (({
  accessToken,
}: useGetRoomSupervisorReportsProps) => Promise<Report[]>) => {
  return async ({
    accessToken,
  }: useGetRoomSupervisorReportsProps): Promise<Report[]> => {
    const useGetRoomSupervisorReportsResponse = await axios.get(
      'http://144.76.118.243:8080/api/v1/meldungen/get/room/{room_id}',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    )

    return useGetRoomSupervisorReportsResponse.data
  }
}

export default useGetRoomSupervisorReports
