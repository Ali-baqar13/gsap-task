'use client'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect } from 'react'


const data = [
  {
    id: 1,
    title: "Ideate",
    description:
      "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
    image: "/images/Ideate.webp",
  },
  {
    id: 2,
    title: "Design",
    description:
      "Our design team crafts intuitive and visually appealing interfaces that enhance user experience and drive engagement.",
    image: "/images/Design.webp",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Our development team builds the product with a focus on quality, performance, and user satisfaction.",
    image: "/images/Development.webp",
  }
]
const page = () => {

 

 useEffect(() => {
   gsap.registerPlugin(ScrollTrigger);

   const cards = gsap.utils.toArray(".card");

  //  console.log(cards, 'checking cards')

  //  cards.forEach((card) => {
     gsap.to(".contain", {
       scrollTrigger: {
         trigger: ".contain",
         start: "top 20%",
         end: "bottom 80%",
         endTrigger: ".container",
         pin: true,
         scrub: true,
         markers: true,
         pinSpacing: false,
       },
     });
   gsap.fromTo(
     ".bar",
     { y: 0 },
     {
       y:'-=100',
       backgroundColor:'red',
       ease: "none",
       scrollTrigger: {
         trigger: ".contain",
         start: "top top",
         end: "bottom top",
         scrub: true,
         markers: true,
         pinSpacing: false,
       },
     },
   );
  //  });
 }, []);
    
      



  return (
    <main className="bg-foreground">
      <section className="container max-w-[1216px] mx-auto  py-[100px] ">
        <div className="">
          <h1 className="text-48-55 font-bold max-w-[550px] text-background mb-[80px]">
            Our Product {' '}
            <span className="text-success w-full">Development Process</span>
          </h1>
          <div className="flex">
            <div className=" mr-[48px]  relative  bg-progressBar  w-[4px] h-auto z-[7]">
              <div className="bar absolute top-0 left-0 w-full h-full bg-white"></div>
              
            </div>
            <div className="flex flex-col">
              {data?.map((items, index) => (
                <div className="flex flex-col max-w-[512px]">
                  <p className="mb-[12px] text-background">01/06</p>
                  <p className="mb-[12px] text-success text-70-70">
                    {items?.title}
                  </p>
                  <p className="text-background text-20-30 mb-[144px]">
                    {items?.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="contain relative ml-[80px]  w-[384px] h-[544px] rounded-[180px] overflow-hidden bg-background border-success">
              <Image
                alt="sticky"
                src={data[0]?.image}
                width={384}
                height={544}
                className="absolute w-[384px] h-[544px] object cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page
