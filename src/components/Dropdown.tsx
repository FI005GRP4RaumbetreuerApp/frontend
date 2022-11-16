import * as React from 'react'

const App = () => {
  const [open, setOpen] = React.useState(false)

  const [room, setRoom] = React.useState('-')

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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (key) => (
              <button
                onClick={() => handleRoomSelection(key)}
                className="hover:bg-primary rounded-xl w-full"
              >
                key
              </button>
            )
          )}
        </ul>
      ) : null}
    </div>
  )
}

export default App
