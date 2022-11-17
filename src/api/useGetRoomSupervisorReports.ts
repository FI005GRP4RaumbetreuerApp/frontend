import axios from 'axios'
import { Report } from '../types'

interface useGetRoomSupervisorReportsProps {
  id: string
  accessToken: string
}

const useGetRoomSupervisorReports = (): (({
  accessToken,
  id,
}: useGetRoomSupervisorReportsProps) => Promise<Report[]>) => {
  return async ({
    accessToken,
    id,
  }: useGetRoomSupervisorReportsProps): Promise<Report[]> => {
    const useGetRoomSupervisorReportsResponse = await axios.get(
      'http://144.76.118.243:8080/api/v1/meldungen/get/room/' + id,
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
