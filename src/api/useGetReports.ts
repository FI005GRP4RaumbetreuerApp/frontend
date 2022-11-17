import axios from 'axios'
import { Report } from '../types'

const useGetReports = (): (() => Promise<Report[]>) => {
  return async (): Promise<Report[]> => {
    const accessToken = window.localStorage.getItem('accessToken')

    const useGetReportsResponse = await axios.post(
      '144.76.118.243:8080/api/v1/meldungen/get/own',
      {
        headers: {
          authorization: accessToken,
        },
      }
    )

    return useGetReportsResponse.data
  }
}

export default useGetReports
