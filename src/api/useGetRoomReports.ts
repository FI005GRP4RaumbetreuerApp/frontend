import axios from 'axios'
import { Report } from '../types'

interface useGetRoomReportsProps {
  id: string
  accessToken: string
}

const useGetRoomReports = (): (({
  accessToken,
  id,
}: useGetRoomReportsProps) => Promise<Report[]>) => {
  return async ({
    accessToken,
    id,
  }: useGetRoomReportsProps): Promise<Report[]> => {
    const useGetRoomReportsResponse = await axios.get(
      'http://localhost:8080/api/v1/meldungen/get/room/' + id,
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
