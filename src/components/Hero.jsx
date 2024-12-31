import Typewriter from "typewriter-effect"
import {HERO_CONTENT} from "../constants/index"
import heroimg from "../assets/heroimg.png"
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-3 ">
      <div className="flex flex-wrap">
         <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                 <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{duration: 0.5, delay: 1}}
                  className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Ali Ahmed</motion.h1>
                 <span className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                  <Typewriter
                       onInit={(typewriter) => {
                     typewriter
                        .typeString("Front-End Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Back-end Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Full Stack Developer")
                        .start()}}
                    />
                    </span>
                 <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
              </div>
              </div>
           <div className="w-full lg:w-1/2">
              <div className="flex justify-center">
                 <img className="w-[70%]" src={heroimg} alt="" />
              </div>
              </div>
      </div>
    </div>
  )
}

export default Hero
