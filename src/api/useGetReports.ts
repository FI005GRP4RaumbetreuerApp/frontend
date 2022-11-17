import axios from 'axios'
import { useCookies } from 'react-cookie'
import { Report } from '../types'

const useGetReports = (): (() => Promise<Report[]>) => {
  return async (): Promise<Report[]> => {
    const [cookies] = useCookies(['access_token'])

    const useGetReportsResponse = await axios.post(
      'http://144.76.118.243:8080/api/v1/meldungen/get/own',
      {
        headers: {
          authorization: 'Bearer ' + cookies.access_token,
        },
      }
    )

    return useGetReportsResponse.data
  }
}

export default useGetReports
