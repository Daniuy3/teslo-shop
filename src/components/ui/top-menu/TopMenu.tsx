'use client'

import { mainFont } from '@/app/config/fonts'
import { useUiStore } from '@/store'
import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

export const TopMenu = () => {

    const { openSideMenu } = useUiStore() /* ← Store from Zustand */
  return (
    <nav className='flex px-5 justify-between items-center w-full '>
        {/* Logo */}
        <div>
            <Link href={"/"}>
                <span className={`${mainFont.className} antialiased`}>Teslo</span>
                <span> | Shop</span>
            </Link>
        </div>
        {/* Centered Menu */}
        <div className='hidden sm:block'>
            <Link
                className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-semibold'
                href={"/category/men"}
            >
                Hombres
            </Link>

            <Link
                className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-semibold'
                href={"/category/women"}
            >
                Mujeres
            </Link>

            <Link
                className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-semibold'
                href={"/category/kids"}
            >
                Niños
            </Link>
        </div>

        <div className=' flex items-center'>
            <Link
                className='mx-2'
                href={"/search"}
            >
                <IoSearchOutline className='text-2xl cursor-pointer' />
            </Link>
            <Link
            className='mx-2'
                href={"/cart"}
            >
                <div className='relative'>
                    <span className=' absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-500 text-white'>
                        3
                    </span>
                    <IoCartOutline className='text-2xl cursor-pointer' />
                </div>
            </Link>
            <button 
                className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
                onClick={() => openSideMenu()}
            >Menú</button>
        </div>
    </nav>
  )
}

