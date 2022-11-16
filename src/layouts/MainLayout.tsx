import { FC, ReactNode } from 'react'
interface Props {
  children: ReactNode
  topButtons?: boolean
}
export const MainLayout: FC<Props> = (props: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-primary h-32 w-full flex items-center justify-center">
        <div className="w-full md:w-2/3 flex justify-center items-center justify-between space-x-10">
          <span className="flex text-white text-3xl text-center">
            Georg-Simon-Ohm-Berufskolleg
          </span>
          {props.topButtons ? (
            <div className="flex gap-3">
              {' '}
              <button className="bg-secondary w-24 h-12 rounded-3xl text-white text-xl">
                Raum
              </button>
              <button className="bg-secondary w-32 h-12 rounded-3xl text-white text-xl">
                Ausloggen
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="w-full h-full bg-[#d9d9d9] justify-center items-center">
        <div className="flex flex-col h-96 w-full md:w-2/3 mx-auto py-10 rounded-3xl gap-8">
          {props.children}
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
