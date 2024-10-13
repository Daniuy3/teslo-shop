'use client'

import { useUiStore } from '@/store'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'

export const Sidebar = () => {

    const { isSideMenuOpen, closeSideMenu} = useUiStore() /* ← Store from Zustand */

  return (
    <div className=''>
        {/* Background */}
        {
            isSideMenuOpen && (
                <>
                    <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'/>
                    <div className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'/>
                </>
            )
        }

        {/* Side menu */}

        <nav className={
            clsx(
                'fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
                isSideMenuOpen ? 'translate-x-0' : 'translate-x-full' /* ← Open or close the menu */
            )
        }>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Menu</h1>
                <IoCloseOutline className='text-2xl cursor-pointer'
                    onClick={() => closeSideMenu()}
                />
            </div>
            <div className='mt-10 flex space-x-2 items-center '>
                <IoSearchOutline className='text-2xl mt-2'/> 
                <input type='text' placeholder='Search...' className='border-b-2 border-black p-2 focus:outline-none focus:bg-gray-100 transition-colors duration-300 rounded-t-md w-full'/>
            </div>

            {/* Menu */}
            <Link
                href='/'
                className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
                <IoPersonOutline className='text-2xl'/>
                <span className='ml-3 text-xl'>Perfil</span>
            </Link>
            
            <Link
                href='/'
                className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
                <IoTicketOutline className='text-2xl'/>
                <span className='ml-3 text-xl'>Ordenes</span>
            </Link>

            <Link
                href='/'
                className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
                <IoLogInOutline className='text-2xl'/>
                <span className='ml-3 text-xl'>Ingresar</span>
            </Link>
            <Link
                href='/'
                className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
                <IoLogOutOutline className='text-2xl'/>
                <span className='ml-3 text-xl'>Salir</span>
            </Link>

            <div className='w-full h-px bg-gray-200 my-10'></div>
        
            <Link
                href='/'
                className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
                <IoShirtOutline className='text-2xl'/>
                <span className='ml-3 text-xl'>Productos</span>
            </Link>
            <Link
                href='/'
                className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
                <IoTicketOutline className='text-2xl'/>
                <span className='ml-3 text-xl'>Ordenes</span>
            </Link>
            <Link
                href='/'
                className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
                <IoPeopleOutline className='text-2xl'/>
                <span className='ml-3 text-xl'>Usuarios</span>
            </Link>
        
        </nav>
    </div>
  )
}
