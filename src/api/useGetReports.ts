import axios from 'axios'
import { useCookies } from 'react-cookie'
import { Report } from '../types'

interface useGetReportsProps {
  accessToken: string
}

const useGetReports = (): (({
  accessToken,
}: useGetReportsProps) => Promise<Report[]>) => {
  return async ({ accessToken }: useGetReportsProps): Promise<Report[]> => {
    const [cookies] = useCookies(['access_token'])

    const useGetReportsResponse = await axios.get(
      'http://144.76.118.243:8080/api/v1/meldungen/get/own',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    )

    return useGetReportsResponse.data
  }
}

export default useGetReports
