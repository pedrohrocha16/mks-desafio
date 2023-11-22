import SkeletonLoader from "@/components/layout/skeleton/Skeleton";
import Card from "@/components/products/Card";
import { useEffect, useState } from 'react'

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const url = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"

export default function Home() {

  const [data, setData] = useState<any>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const json = await res.json()

      setData(json)
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-row justify-center items-center min-h-[80vh] m-[25px] w-[100%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] mb-[35px]">
        {data.products ? data.products.map((product: any) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        )) : (
          <SkeletonLoader />
        )}
      </div>
    </div>
  )
}


