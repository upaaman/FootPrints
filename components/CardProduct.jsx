import { getDiscountPErcentage } from '@/utils/helperFunctions'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const CardProduct = ({ data }) => {
    const p=data?.attributes;
    // console.log(p)
    // console.log("Printing card data",data)


    return (
            <Link href={`/product/${p?.slug}`}
                className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">

                <Image
                    height={500}
                    width={500}
                    src={p?.thumbnail?.data?.attributes?.url}
                    alt={p?.name}
                />
                <div className="p-4 text-black/[0.9]">
                    <h2 className="text-lg font-medium">{p?.name}</h2>
                    <div className="flex items-center text-black/[0.5]">
                        <p className="mr-2 text-lg font-semibold">
                            &#8377;{p?.price}
                        </p>
                        {p?.original_price && <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p?.original_price}
                            </p>
                            <p className="sm:ml-[40%] ml-auto text-[15px]  font-medium text-green-500">
                                {getDiscountPErcentage(p?.original_price, p?.price)}% off
                            </p>
                        </>}

                    </div>
                </div>
            </Link>
    )
}

export default CardProduct






