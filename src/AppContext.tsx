/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'
import { Report, User } from './types'

export type AppContextType = {
  selectedRoomId: string
  setSelectedRoomId: (roomId: string) => void
  certainRoomIdReports: Report[]
  setCertainRoomIdReports: (rooms: Report[]) => void
  userData: User
  setUserData: (userData: User) => void
}

const AppContext = createContext<AppContextType>({
  selectedRoomId: '',
  setSelectedRoomId: () => {},
  certainRoomIdReports: [],
  setCertainRoomIdReports: () => {},
  userData: {} as User,
  setUserData: () => {},
})

export default AppContext
