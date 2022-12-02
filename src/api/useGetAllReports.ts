import axios from 'axios'
import { Report } from '../types'

interface useGetAllReportsProps {
  accessToken: string
}

const useGetAllReports = (): (({
  accessToken,
}: useGetAllReportsProps) => Promise<Report[]>) => {
  return async ({ accessToken }: useGetAllReportsProps): Promise<Report[]> => {
    const useGetAllReportsResponse = await axios.get(
      'http://localhost:8080/api/v1/meldungen/get/all',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    )

    return useGetAllReportsResponse.data
  }
}

export default useGetAllReports
