import { mainFont } from '@/app/config/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PageNotFound = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-[800px] justify-center items-center align-middle'>
        <div className='text-center px-5 mx-5'>
            <h2 className={`antialiased ${mainFont.className} text-9xl`}>404</h2>
            <p className='font-semibold text-xl'>Whoops! Lo sentimos mucho.</p>
            <p className='font-light'>Puedes regresar al</p>
            <Link
                href={"/"}
                className ="font-semibold hover:underline transition-all"
            >
                Inicio
            </Link>
        </div>
        <div className='px-5 mx-5'>
            <Image  src={"/imgs/starman_750x750.png"} alt='Starman' width={750} height={750} /> 
        </div>
    </div>
  )
}
