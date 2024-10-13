"use client"

import { Product } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface Props {
    product: Product
}

export const ProductGridItem = ({ product }:Props) => {

    const [displayedImage, setDisplayedImage] = useState(product.images[0])

  return (
    <div className='rounded-md overflow-hidden fade-in'>
        <Link  href={`/product/${product.slug}`}>
            <Image 
                src={`/products/${displayedImage}`} 
                alt={product.title} 
                className='w-full object-cover image-transition rounded-md' 
                width={500} height={500}
                onMouseEnter={() => setDisplayedImage(product.images[1])}
                onMouseLeave={() => setDisplayedImage(product.images[0])}
            />
        </Link>

        <div className='p-4 flex flex-col'>
            <Link 
                href={`/product/${product.slug}`}
                className='text-lg font-bold hover:underline'    
            >
                {product.title}
            </Link>
            <span className='font-bold'>${product.price} </span>
        </div>
    </div>
  )
}