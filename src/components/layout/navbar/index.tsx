import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { getNavLinks } from "@/utils/sanity"

import rarxlogo from "../../../../public/logo.png"

const Navbar = () => {
  const [navLinks, setNavLinks] = useState([])
  useEffect(() => {
    const getLinks = async () => {
      const links = await getNavLinks()
      setNavLinks(links)
    }
    getLinks()
  }, [])
  return (
    <div className="font-body text-jacarta-500 dark:bg-jacarta-900 z-50 overflow-x-hidden">
      <div className="fixed top-0 z-30 w-full backdrop-blur transition-colors">
        {navLinks.length && (
          <motion.div
            className="flex items-center px-6 py-6 xl:px-24"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="shrink-0">
              <Image src={rarxlogo} height={160} width={160} alt="Expertio Inc." />
            </Link>
            <div className="dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
              <div className="navbar w-full">
                <ul className="flex flex-col lg:flex-row">
                  {navLinks.map((link: NavLinks) => (
                    <li
                      key={link.slug.current}
                      className="py-3.5 font-display text-base font-bold text-primary-jacarta hover:text-[#2bd0ff] lg:mx-5"
                    >
                      <Link href={link.slug.current}>{link.link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
        {/* <div className="flex items-center px-6 py-6 xl:px-24">
          <Link href="/" className="shrink-0">
            <Image src={rarxlogo} height={50} width={50} alt="Expertio Inc." />
          </Link>
          <div className="dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
            <div className="navbar w-full">
              <ul className="flex flex-col lg:flex-row">
                {navLinks.map((link: NavLinks) => (
                  <li
                    key={link.slug.current}
                    className="py-3.5 font-display text-base font-bold text-primary-jacarta hover:text-[#2bd0ff] lg:mx-5"
                  >
                    <Link href={link.slug.current}>{link.link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
