'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { simplifiedProduct } from '../interface';
import Navbar from '../components/navbar';

const Tableware = () => {
  const [filteredData, setFilteredData] = useState<simplifiedProduct[]>([]);

  // Fetch data on the client side
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product" && category->name == "Tableware"]{
        _id,
        name,
        price,
        "imageUrl": images[0].asset->url,
        "slug": slug.current,
        "category": category->name
      }`;
      const result: simplifiedProduct[] = await client.fetch(query);
      setFilteredData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="my-32">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Products Grid */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 xl:gap-x-8">
            {filteredData.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Link href={`product/${product.slug}`}>
                    <Image
                      src={product.imageUrl}
                      alt="product image"
                      height={2000}
                      width={2000}
                      className="w-full h-full lg:w-full lg:h-full object-cover object-center cursor-pointer scale-105 transition duration-300"
                    />
                  </Link>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tableware;
