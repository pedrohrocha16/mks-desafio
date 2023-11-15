import Image from 'next/image'
import React from 'react'
import { MdRemove, MdAdd } from 'react-icons/md'
// import { IoMdTrash } from 'react-icons/io'
import { montMed, montPrice } from '@/styles/fontes/Fontes'

type Props = {
   product: any
}

function Products_Cart({ product }: Props) {

   return (
      <div className='gap-[6px] flex items-center justify-between pl-5 pr-5 pt-2 pb-2 h-[125px] bg-white rounded-[8px] max-w-[379px]'>
         <Image src={product.photo} width={75} height={80} alt={"product"} />
         <div className={`w-[80px] ${montMed.className}`}>
            <p>{product.name}</p>
         </div>
         <div>
            <div className="flex h-[60px] text-[24px] text-center rounded-md items-center justify-center gap-3 border-zinc-300 border-[1px]">
               <MdRemove />
               <p>0</p>
               <MdAdd />
            </div>
         </div>
         <div className='m-1'>
            <p className={`${montPrice.className} text-[14px]`}>R${product.price}</p>
         </div>
      </div>
   )
}

export default Products_Cart


// : <IoMdTrash className="text-[25px]" />