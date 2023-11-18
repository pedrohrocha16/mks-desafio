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
      <div className='gap-[6px] flex items-center justify-between p-1 h-[125px] bg-white rounded-[8px] mb-4 w-[360px]' key={product.id}>
         <Image src={product.photo} width={75} height={80} alt={"product"} />
         <div className={`w-[80px] ${montMed.className}`}>
            <p>{product.name}</p>
         </div>
         <div className='ml-[1px] mr-[1px]'>
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