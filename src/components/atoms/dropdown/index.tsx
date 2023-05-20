import React from "react"
import clsx from "clsx"
import Link from "next/link"
import { AiOutlineDown } from "react-icons/ai"

import { Menu, Transition } from "@headlessui/react"

interface DropdownProps extends Props {
  icon?: React.ReactNode
  title?: string
  titleDecoration?: string
  contents?: Array<{
    id: string | number
    slug: string
    name: string
  }>
  extra?: React.ReactNode
}

const DropDown = ({ icon, className, title, contents, extra, titleDecoration }: DropdownProps) => {
  return (
    <Menu as="div" className={"relative inline-block text-left " + className}>
      <div>
        <Menu.Button className={"flex w-full items-center justify-center gap-2 " + titleDecoration}>
          <span>{title || "Options"}</span>
          {icon || <AiOutlineDown className="h-3 w-3" aria-hidden="true" />}
        </Menu.Button>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="h-full bg-white py-1">
            {contents?.map((item, index) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <Link
                    href={item.slug}
                    className={clsx(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
        {extra && extra}
      </Transition>
    </Menu>
  )
}

export default DropDown
