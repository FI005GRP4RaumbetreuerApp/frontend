/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'
import { Report } from './types'

export type AppContextType = {
  selectedRoomId: string
  setSelectedRoomId: (roomId: string) => void
  certainRoomIdReports: Report[]
  setCertainRoomIdReports: (rooms: Report[]) => void
}

const AppContext = createContext<AppContextType>({
  selectedRoomId: '',
  setSelectedRoomId: () => {},
  certainRoomIdReports: [],
  setCertainRoomIdReports: () => {},
})

export default AppContext
