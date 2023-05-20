import React, { CSSProperties, MouseEventHandler } from "react"
import clsx from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  disabled?: boolean
  textClassName?: string
  variant?: keyof typeof ButtonVarients
  children?: React.ReactNode
  style?: CSSProperties
}

export const ButtonVarients = {
  primary:
    "bg-primary-yellow hover:bg-primary-yellow/75 text-primary-black font-bold py-2 px-4 rounded  ",
  secondary:
    "bg-primary-yellow hover:bg-primary-yellow/75 text-primary-black font-bold py-2 px-4  ",
  blue: "rounded-2xl border-solid py-6 px-10 text-2xl  font-bold opacity-75 shadow-lg hover:border-solid hover:border-green-400",
  link: "inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out",
  load: "m-auto items-center flex h-[40px] w-[200px] flex-col justify-center bg-black text-white",
  pill: "h-10 px-5  text-white transition-colors duration-150 bg-primary-yellow rounded-full focus:shadow-outline hover:bg-primary-yellow/75",
  white: "bg-white text-black sm:p-5 py-2 px-3 sm:text-[1.2rem] rounded-2xl font-bold",
  download: "bg-[#FFC642] text-white sm:text-[1.2rem] rounded-2xl font-bold py-2 px-3 sm:p-5 ",
}

const Button = ({
  title,
  onClick,
  className = "",
  disabled = false,
  textClassName = "",
  variant,
  children,
  type,
  style,
}: ButtonProps) => {
  const BASE_CLASS = "font-bold rounded"

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={clsx(BASE_CLASS, variant && ButtonVarients[variant], className)}
    >
      {children && children}
      {title && <span className={textClassName}>{title}</span>}
    </button>
  )
}

export default Button
