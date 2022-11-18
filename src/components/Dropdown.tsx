import * as React from 'react'
import { useCookies } from 'react-cookie'
import { useGetRoomReports, useGetRooms } from '../api'
import AppContext from '../AppContext'
import { Report, Room } from '../types'

const App: React.FC = () => {
  const {
    setCertainRoomIdReports,
    setSelectedRoomId,
    selectedRoomId,
    newReportIncoming,
  } = React.useContext(AppContext)

  const [cookies] = useCookies(['access_token'])

  const [rooms, setRooms] = React.useState<Room[]>([])

  const [open, setOpen] = React.useState(false)

  const getRoomReports = useGetRoomReports()

  const getRooms = useGetRooms()

  React.useEffect(() => {
    getRooms({ accessToken: cookies.access_token }).then((rooms: Room[]) =>
      setRooms(rooms)
    )
  }, [])

  const handleRoomSelection = (key: string) => {
    setSelectedRoomId(key)
    getRoomReports({
      id: key,
      accessToken: cookies.access_token,
    }).then((reports: Report[]) => setCertainRoomIdReports(reports.reverse()))
    setOpen(!open)
  }

  React.useEffect(() => {
    getRoomReports({
      id: selectedRoomId,
      accessToken: cookies.access_token,
    }).then((reports: Report[]) => setCertainRoomIdReports(reports.reverse()))
  }, [newReportIncoming])
  return (
    <div className="text-white relative">
      <button
        className="bg-secondary px-4 w-24 h-12 rounded-3xl text-xl flex items-center justify-around"
        onClick={() => setOpen(!open)}
      >
        {selectedRoomId}
        {open == false && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
        {open == true && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </button>
      {open ? (
        <ul className="bg-secondary overflow-auto w-24 h-24 absolute rounded-xl z-50">
          {rooms.map((item: Room) => (
            <button
              onClick={() => handleRoomSelection(item.id)}
              className="hover:bg-primary rounded-xl w-full"
            >
              {item.id}
            </button>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default App
