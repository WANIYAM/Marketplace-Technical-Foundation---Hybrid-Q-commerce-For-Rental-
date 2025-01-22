/* eslint-disable @next/next/no-img-element */
import React from "react";
import NotificationBar from "../components/topnav";
import Link from "next/link";
import Navbar from "../components/navbar";
import Image from "next/image";

const About = () => {
  return (
    <>
      <NotificationBar />
      <Navbar />
      <div>
        {/* Hero Section */}
        <div className="bg-slate-200 text-white w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
          <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
            Transforming your celebrations with premium event essentials—available for purchase and rental
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/all">
              <button className="bg-blue-700 hover:bg-gray-600 h-12 w-40 rounded-sm text-custom-purple">
              Our Collection
              </button>
            </Link>
          </div>
        </div>

        {/* Story Section */}
        <div className="  flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-16">
          <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20">
          <h1 className="text-xl md:text-2xl">A new vision for unforgettable events</h1>
<p className="mt-6">
  Born out of a passion for creating memorable events, we started our journey in 2023 with a mission to
  provide high-quality event essentials for every occasion. Whether you&apos;re planning a party, wedding, or
  corporate event, we offer an extensive range of premium products that you can either purchase or rent.
</p>

            <Link href="/">
              <button className="bg-input-bg h-12 w-40 rounded-sm mt-10 text-gray-950">
                Explore Our Rentals & Purchases
              </button>
            </Link>
          </div>
          <div className="w-full md:w-2/5">
  <Image
    src="/images/about 1.jpg"
    alt="Event Essentials"
    className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
    height={400}
    width={400}
  />
</div>

        </div>

        {/* Service Section */}
        <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
          <img
            src="/images/about 2.webp"
            alt="Service"
            className="w-full md:w-2/5 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
          <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20">
            <h1 className="text-xl md:text-2xl text-custom-purple">
              Making every event extraordinary with top-tier rentals and products
            </h1>
            <p className="text-custom-purple mt-6">
  Whether you&apos;re renting or buying, we provide the highest quality event essentials. From stylish tables,
  chairs, and linens to elegant lighting and decor, our products add a touch of luxury to your event, while
  our rental options offer you flexibility without compromising on style.
</p>

            <Link href="/contact">
              <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">Contact Us</button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full h-auto pb-16">
          <h1 className="text-center text-custom-purple text-xl">Why choose us for your next event?</h1>
          <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
            {[
              {
                img: "/images/Delivery.png",
                title: "On-time delivery & setup",
                desc: "We ensure timely delivery and professional setup for your event, making it stress-free and seamless.",
                link: "/delivery-setup",
              },
              {
                img: "/images/check.png",
                title: "Curated for every occasion",
                desc: "Our collection is designed for a wide range of events, from weddings and parties to corporate gatherings.",
                link: "/collection",
              },
              {
                img: "/images/Purchase.png",
                title: "Affordable and flexible",
                desc: "Our prices are competitive, and our rental options give you the flexibility to choose what fits your needs.",
                link: "/pricing",
              },
              {
                img: "/images/Sprout.png",
                title: "Eco-conscious",
                desc: "We prioritize sustainability by offering eco-friendly rental options and minimizing waste with recyclable materials.",
                link: "/eco-friendly",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 w-72 h-auto rounded-sm px-6 py-8 text-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                />
                <h1 className="text-custom-purple text-lg mt-4">{item.title}</h1>
                <p className="text-custom-purple mt-4">{item.desc}</p>
                <Link href={item.link}>
                  <button className="bg-custom-purple text-white px-6 py-2 mt-4 rounded-sm">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <section>
          <div className='py-12 bg-[#F9F9F9] text-[#2A254B] mt-12'>
            <div className='w-full max-w-[640px] md:max-w-[1340px] h-[350px] bg-white mx-auto flex justify-center items-center flex-col px-4'>
              <h1 className='text-2xl md:text-4xl text-center'>
                Join the celebration club
              </h1>
              <h2 className='text-center py-4 text-sm md:text-base'>
                Sign up for our newsletter and receive exclusive offers on rentals, new collections, and more.
              </h2>
              <div className='mt-4 w-full'>
                <form action="" className='flex flex-col md:flex-row items-center justify-center'>
                  <input
                    type="text"
                    placeholder="your@email.com"
                    className="p-4 bg-[#F9F9F9] w-full md:w-[354px] h-[56px] outline-none mb-4 md:mb-0"
                  />
                  <button className='p-2 bg-[#2A254B] text-white w-full md:w-[118px] h-[56px]'>
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
