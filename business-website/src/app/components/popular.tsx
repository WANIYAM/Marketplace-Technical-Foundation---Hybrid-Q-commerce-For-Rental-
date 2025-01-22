"use client"
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// Define the type for the product data
interface SimplifiedProduct {
  _id: string;
  price: number;
  name: string;
  slug: string;
  categoryName: string;
  imageUrl: string;
}

// Fetch data function
async function getData(): Promise<SimplifiedProduct[]> {
  const query = `*[_type =='product'][0...3] | order(_createdAt desc){
    _id,
    price,
    name,
    "slug":slug.current,
    "categoryName":category->name,
    "imageUrl":images[0].asset->url
  }`;
  const data = await client.fetch(query);
  console.log("Fetched Data:", data);
  return data;
}

// React component
export default function Popular() {
  const [products, setProducts] = useState<SimplifiedProduct[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getData();
      setProducts(fetchedData);
    }
    fetchData();
  }, []);

  if (!products) {
    return <div>Loading...</div>; // Add a loading state
  }

  return (
    <>
      <section>
        <div className="px-8 py-12 text-[#2A254B] mt-12">
          <h1 className="text-2xl font-bold">Our Popular Products</h1>

          {/* Product list */}
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            {products.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-500 group-hover:opacity-75 lg:h-80">
                  <Link href={`product/${product.slug}`}>
                    <Image
                      src={product.imageUrl}
                      alt="product image"
                      height={200}
                      width={200}
                      className="w-full h-full lg:w-full lg:h-full object-cover object-center cursor-pointer scale-105 transition duration-300"
                    />
                  </Link>
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.categoryName}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center items-center">
            <Link href="/all">
              <button
                className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B] hover:bg-[#EAEAEA] transition-all"
                aria-label="View products collection"
              >
                View products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
