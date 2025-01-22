import { client } from '@/sanity/lib/client'
import React from 'react'

const Datafetch = async () => {
    const query=await client.fetch(`*[_type == "product"]{
        _id,
        name,
        price,
        tags,
        "imageUrl":image.asset->url}`);
        console.log(query)
  return (
    <div>
        
    </div>
  )
}

export default Datafetch