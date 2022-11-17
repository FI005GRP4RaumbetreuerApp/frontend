import * as React from 'react'
import { useCookies } from 'react-cookie'
import { useGetRooms } from '../api'
import { Room } from '../types'

const App = () => {
  const [cookies] = useCookies(['access_token'])

  const [rooms, setRooms] = React.useState<Room[]>([])

  const [open, setOpen] = React.useState(false)

  const [room, setRoom] = React.useState('-')

  const getRooms = useGetRooms()

  React.useEffect(() => {
    getRooms({ accessToken: cookies.access_token }).then((rooms: Room[]) =>
      setRooms(rooms)
    )
  }, [])

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleRoomSelection = (key) => {
    setRoom(`${key}`)
    localStorage.setItem('selected-room', key)
    setOpen(!open)
  }

  console.log(rooms)

  return (
    <div className="text-white">
      <button
        className="bg-secondary w-24 h-12 rounded-3xl text-xl flex items-center justify-around"
        onClick={handleOpen}
      >
        {room}
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
        <ul className="bg-secondary overflow-auto w-24 h-24 absolute rounded-xl">
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
