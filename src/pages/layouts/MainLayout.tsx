import { FC, ReactNode } from 'react'
interface Props {
  children: ReactNode
}
export const MainLayout: FC = (props: Props) => {
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
