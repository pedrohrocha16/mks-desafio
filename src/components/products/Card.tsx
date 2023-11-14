import { montLight, montMed, montBold, montPrice } from '@/styles/fontes/Fontes'
import { LuShoppingBag } from 'react-icons/lu'
import React from 'react'
import Image from 'next/image'

type Props = {
   src?: any,
   product: any
   price: any
   description: any
}

function Card({ src, product, price, description }: Props) {
   return (
      <div className='flex flex-col h-[285px] w-[219px] rounded-[8px] p-[2px] bg-white shadow-md'>
         <div className='flex justify-center p-1 items-center'>
            <Image src={src} width={138} height={138} alt={product} />
         </div>
         <div className='flex flex-row w-[120px] min-h-[35px] p-1'>
            <div className='flex'>
               <div className={`text-[16px] w-[124px] ${montMed.className}`} >
                  <p>{product}</p>
               </div>
               <div className={`${montPrice.className} m-1 justify-center items-center text-white min-w-[64px] max-w-[200px] h-[26px] text-center rounded-[5px] bg-[#373737]`}>
                  <p>R${price}</p>
               </div>
            </div>
         </div>
         <div className='flex flex-col h-[80px] mt-1 ml-2'>
            <div className={`mt-3 text-[13px] w-[192px] ${montLight.className}`}>
               <p>{description}</p>
            </div>
         </div>
         <div className='text-white flex justify-center items-center gap-2 w-[218px] h-[32px] bg-[#0F52BA] rounded-b-[7px]'>
            <LuShoppingBag className={`${montBold.className}`} /><p className={`${montBold.className} h-[16px] justify-center items-center mt-2`}>COMPRAR</p>
         </div>
      </div>
   )
}

export default Card

//src, nome produto, valor, descri