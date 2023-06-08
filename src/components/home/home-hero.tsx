import React, { useState } from "react"
import clsx from "clsx"

const HomeHero = () => {
  const [shift, setShift] = useState(false)

  return (
    <div className="relative w-full lg:overflow-hidden">
      <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
        <div className="main-container relative flex flex-1 pt-[15vh]">
          <div className="xs:items-start relative z-20 flex w-full flex-col items-center gap-5">
            <h2 className="tp-hero1 xs:text-left flex flex-col overflow-hidden break-words pb-2.5 text-center text-8xl font-extrabold">
              <span
                className={clsx(
                  "transition-all duration-700",
                  shift ? "translate-y-0" : "translate-y-[110%]"
                )}
              >
                Start
                <span className="xs:inline block">
                  <span className="text-secondary-2 relative">growing</span> with us
                </span>
              </span>
            </h2>
            <p
              className={clsx(
                "text-primary/40 xs:text-left w-2/3 translate-y-14 whitespace-pre-line text-center opacity-0 transition-all",
                shift && "opacity-100"
              )}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, laborum odio
              accusantium doloribus culpa corrupti veritatis recusandae tenetur rem quibusdam
              voluptate eius debitis beatae atque iste fuga sunt aliquam?
            </p>
            <div
              className={clsx("translate-y-20 opacity-0 transition-all", shift && "opacity-100")}
            >
              <a
                className="button h-15 xs:h-13 xs:rounded-xl xs:px-8 button-secondary group rounded-2xl px-12 py-0 lg:h-14 lg:px-9"
                type="submit"
                href="/app/search"
              >
                <span className=" tp-h6 xs:tp-h7 z-10">Explore Programs</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="h-15 from-base-1 absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t to-transparent"></div>

      <div
        className="absolute inset-0 h-full w-full transition-all duration-700 xl:-mb-8"
        style={{
          transform: shift ? "translate(0px, 150px) scale(1.2) " : "translate(0px, 0px)",
        }}
      >
        <video
          muted
          playsInline
          onEnded={() => setShift(true)}
          autoPlay
          preload="auto"
          className="mtz-vlc-ihack -z-10 h-full w-full object-cover"
        >
          Your browser does not support the video tag.
          <source src="/video/head.mp4" />
        </video>
      </div>
    </div>
  )
}

export default HomeHero
