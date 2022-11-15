import { FC } from 'react'

export const LoginPage: FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-primary h-32 w-full ">
        <div className="flex flex-row justify-center mt-8">
          <span className="flex text-white text-5xl">
            Georg-Simon-Ohm-Berufskolleg
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full h-full bg-backgroundGray justify-center items-center">
        <div className="flex flex-col h-96 w-128 bg-white rounded-3xl items-center gap-8">
          <span className="text-gray-400 text-2xl mt-8">
            Login-Raumbetreuer
          </span>

          <input
            className="w-3/5 h-12 bg-backgroundGray rounded-xl text-gray-500 px-4"
            type="text"
          />
          <input
            className="w-3/5 h-12 bg-backgroundGray rounded-xl text-gray-800 px-4"
            type="text"
          />
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
