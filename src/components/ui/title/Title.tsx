import { mainFont } from '@/app/config/fonts'
import React from 'react'


interface Props {
    title : string
    subtitle?: string
    className?: string
}
export const Title = ({ title, className, subtitle} : Props) => {
  return (
    <div className={` mt-3 ${className}`}>
        <h1 className={`${mainFont.className} antialiased text-4xl font-semibold my-7`}>{title} </h1>
        {
            subtitle && <h3 className="text-lg text-gray-500 mb-5">{subtitle}</h3>
        }
    </div>
  )
}
