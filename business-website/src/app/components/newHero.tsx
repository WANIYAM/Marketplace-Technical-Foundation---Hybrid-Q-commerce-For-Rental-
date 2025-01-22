"use client"

import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from "next/image";
import React, { useEffect, useState } from 'react';

// Define the data structure
interface HeroImageData {
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

async function getData(): Promise<HeroImageData> {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}

export default function NewHero() {
  const [data, setData] = useState<HeroImageData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getData();
      setData(fetchedData);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Add a loading state
  }

  return (
    <section className="text-gray-600 body-font border shadow-lg rounded-lg">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Elegant Event Furniture for Every Occasion
          </h1>
          <p className="mb-8 leading-relaxed">
            Transform your event with our beautifully decorated chairs and tables, designed to enhance any setting. Whether you&apos;re hosting a wedding, corporate gathering, or private celebration, choose from our exclusive collection of rental and purchase options to suit your needs.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              BUY NOW
            </button>
            <button className="ml-4 inline-flex text-gray-800 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
              RENT NOW
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="h-full w-full object-cover object-center rounded"
            alt="hero"
            src={urlFor(data.image).url()}
            width={300}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}


