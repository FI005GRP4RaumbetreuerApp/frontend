import * as React from 'react'
import { useGetRooms } from '../api'
import { Room } from '../types'

const App = () => {
  const [open, setOpen] = React.useState(false)

  const [room, setRoom] = React.useState('-')

  const getRooms = useGetRooms()

  function handleRooms(): Room[] {
    let rooms: Room[] = []

    getRooms().then((roomsResponse: Room[]) => {
      rooms = roomsResponse
    })

    return rooms
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleRoomSelection = (key) => {
    setRoom(`${key}`)
    setOpen(!open)
  }

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
          {handleRooms().map((key) => (
            <button
              onClick={() => handleRoomSelection(key.id)}
              className="hover:bg-primary rounded-xl w-full"
            >
              {key.id}
            </button>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default App
