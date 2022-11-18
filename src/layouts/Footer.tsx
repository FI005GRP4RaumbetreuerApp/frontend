import { FC } from 'react'

const Footer: FC = () => {
  return (
    <div className="flex flex-col h-12 bg-black absolute inset-x-0 bottom-0 text-xs justify-center items-center">
      <span className="text-white">©Georg-Simon-Ohm Berufskolleg 2022</span>
    </div>
  )
}

export default Footer
