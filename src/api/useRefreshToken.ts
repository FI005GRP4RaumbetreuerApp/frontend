import axios from 'axios'

type useRefreshTokenProps = {
  accessToken: string
  refreshToken: string
}

const useRefreshToken = (): (({
  accessToken,
  refreshToken,
}: useRefreshTokenProps) => Promise<{ accessToken: string }>) => {
  return async ({
    accessToken,
    refreshToken,
  }: useRefreshTokenProps): Promise<{ accessToken: string }> => {
    const requestBody = {
      accessToken,
      refreshToken,
    }
    const useRefreshResponse = await axios.post(
      'localhost:8080/api/v1/auth/refresh',
      requestBody
    )

    return useRefreshResponse.data
  }
}

export default useRefreshToken
