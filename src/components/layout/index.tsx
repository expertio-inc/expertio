import React from "react"
import clsx from "clsx"

import Navbar from "./navbar"

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <>
      <Navbar />
      <div className={clsx("", className)}>{children}</div>
    </>
  )
}

export default Layout
