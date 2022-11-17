import { FC } from 'react'

interface InputProps {
  errorMessage?: string
  type?: string
  placeHolder?: string
  className?: string
  onChange: (value: string) => void
}
const Input: FC<InputProps> = ({
  errorMessage,
  placeHolder,
  className,
  type = 'text',
  onChange,
}) => {
  return (
    <div className={className}>
      <span
        className={`text-xs text-red-500 h-full ${
          !errorMessage ? 'hidden' : ''
        }`}
      >
        {errorMessage}
      </span>
      <input
        className="w-full h-12 bg-backgroundGray rounded-xl text-gray-500 px-4"
        type={type}
        placeholder={placeHolder}
        onChange={(e) => {
          onChange(e.currentTarget.value)
        }}
      />
    </div>
  )
}

export default Input
