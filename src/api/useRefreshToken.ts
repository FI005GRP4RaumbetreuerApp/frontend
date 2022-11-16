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
    const useLoginResponse = await axios.post('/api/v1/login', requestBody)

    return useLoginResponse.data
  }
}

export default useRefreshToken
