import { FC } from 'react'

export const Landingpage: FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-primary h-32 w-full ">
        <div className="flex flex-row justify-center mt-8">
          <span className="flex text-white text-4xl">Max Mustermann</span>
          <div className="">
            <button className="bg-secondary w-24 h-12 rounded-3xl text-white text-xl">
              Raum
            </button>
            <button className="bg-secondary w-32 h-12 rounded-3xl text-white text-xl">
              Ausloggen
            </button>
          </div>
        </div>
      </div>
      <div className="px-32 flex flex-col w-full h-full bg-backgroundGray justify-center items-center">
        <button className="bg-secondary mb-4 w-48 h-12 rounded-3xl text-white text-xl">
          Neue Meldung
        </button>
        <div className="overflow-y-scroll h-128 px-8 w-full bg-white rounded-3xl">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(() => (
            <div className="hover:bg-gray-300 p-8 flex flex-row text-3xl text-stone-500 rounded-xl">
              <div className="w-full">Witchy Woman</div>
              <div className="justify-between w-2/5 flex flex-row">
                <div>The Eagles</div>
                <div>1972</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-12 bg-black self-bottom text-xs justify-center">
        <span className="text-white mt-4">
          ©Georg-Simon-Ohm Berufskolleg 2022
        </span>
      </div>
    </div>
  )
}
