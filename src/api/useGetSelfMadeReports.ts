import axios from 'axios'
import { Report } from '../types'

interface useGetSelfMadeReportsProps {
  accessToken: string
}

const useGetSelfMadeReports = (): (({
  accessToken,
}: useGetSelfMadeReportsProps) => Promise<Report[]>) => {
  return async ({
    accessToken,
  }: useGetSelfMadeReportsProps): Promise<Report[]> => {
    const useGetSelfMadeReportsResponse = await axios.get(
      'http://localhost:8080/api/v1/meldungen/get/own',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    )

    return useGetSelfMadeReportsResponse.data
  }
}

export default useGetSelfMadeReports
