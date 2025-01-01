import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
const Header = () => {
  return (
     <nav className=' mb-20  flex flex-shrink-0 items-center justify-between  py-6 '>
        <div className='flex flex-shrink-0 items-center'>
           <h1 className='text-3xl '>Ali</h1>
        </div>
        <div className='flex flex-shrink-0 justify-center gap-4 text-2xl'>
           <a href="https://www.instagram.com/3vli13/" target='_blank'><FaInstagram /></a>
           <a href="https://github.com/3vli" target='_blank'><FaGithub  /></a>
           <a href="https://discord.com/users/804842497243086938" target='_blank'><FaDiscord /></a>
           
           
        </div>
       
      </nav>
  )
}

export default Header
