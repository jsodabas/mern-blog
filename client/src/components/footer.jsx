import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {FaGithub, FaLinkedin, FaYoutube} from 'react-icons/fa'

const footer = () => {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to='/' className="border-b-2 whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
                    <span className='px-2 py-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Shane&apos;s</span>
                    Blog
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title='About' className='mt-5' />
                        <Footer.LinkGroup col>
                            <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>100 JS Projects</Footer.Link>
                            <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>Shane&apos;s Blog</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow Us' className='mt-5' />
                        <Footer.LinkGroup col>
                            <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>Github</Footer.Link>
                            <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>Youtube</Footer.Link>
                            <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>LinkedIn</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal' className='mt-5' />
                        <Footer.LinkGroup col>
                            <Footer.Link href='#'>Terms & conditions</Footer.Link>
                            <Footer.Link href='#'>Privacy Policy</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by="Shane's Blog" year={new Date().getFullYear()} />
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center ">
                    <Footer.Icon href='#' icon={FaGithub} />
                    <Footer.Icon href='#' icon={FaYoutube} />
                    <Footer.Icon href='#' icon={FaLinkedin} />
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default footer