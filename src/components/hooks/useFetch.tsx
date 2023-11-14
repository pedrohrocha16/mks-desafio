import { useState, useEffect } from 'react'

export const useFetch = (url: any) => {

   const [data, setData] = useState<any[]>([])

   useEffect(() => {
      async function fetchData() {

         const res = await fetch(url)
         const json = await res.json()

         setData(json)
      }

      fetchData()

   }, [url])

   return data
}
