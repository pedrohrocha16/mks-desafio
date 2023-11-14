import Card from "@/components/products/Card";
import { useEffect, useState } from 'react'

const url = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"

// carrinho redux
// responsividade

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

  console.log(data)

  return (
    <div className="flex flex-col items-center min-h-[80vh] m-[25px] w-[100%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] mb-[35px]">
        {data.products && data.products.map((product: any) => (
          <div key={product.id}>
            <Card src={product.photo}  product={product.name} price={product.price} description={"Redesigned from scratch and completely revised."}/>
          </div>
        ))}
      </div>
    </div>
  )
}


// src, product, price, description

