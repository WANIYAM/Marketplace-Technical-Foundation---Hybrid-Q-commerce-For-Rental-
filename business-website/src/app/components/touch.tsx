import Image from 'next/image'
import React from 'react'

const Touch = () => {
  return (
    <>
      <section>
        <div className="py-12 text-[#2A254B] mt-12">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[720px] h-auto px-4 md:px-12 py-8 flex flex-col justify-between">
            <div>
                <h1 className="text-2xl md:text-2xl">
                  From a small idea to <br /> event essentials for every occasion
                </h1>
                <h1 className="py-6 text-lg md:text-xl">
                  When we started Eventique Events, the idea was simple. Make high-quality event and party essentials <br />
                  affordable and available for everyone.
                </h1>
                <h1 className="text-base md:text-lg">
                  Carefully curated and thoughtfully designed event essentials are what we live, <br />
                  breathe, and create, making our boutique the go-to place for the <br />
                  global event planning community.
                </h1>
              </div>
              <div className="my-10">
                <button className="bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B]">
                  Get in touch
                </button>
              </div>
            </div>

            <div className="w-full md:w-[890px] h-auto">
              <Image
                src={'/images/event.jpg'}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Touch;
