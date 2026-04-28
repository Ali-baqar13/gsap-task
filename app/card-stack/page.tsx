import Image from 'next/image';
import React from 'react'

const page = () => {
  return (
    <main className="bg-foreground">
      <section className="max-w-[1216px] mx-auto  py-[100px] ">
        <div className="">
          <h1 className="text-48-55 font-bold max-w-[550px] text-background mb-[80px]">
            Our Product{" "}
            <span className="text-success w-full">Development Process</span>
          </h1>

          <div className="flex">
            <div className="mr-[48px]   border-[3px] border-progress w-[3px]  z-[7]"></div>
            <div className="flex flex-col max-w-[512px]">
              <p className="mb-[12px] text-background">01/06</p>
              <p className="mb-[12px] text-success text-70-70">Ideate</p>
              <p className="text-background text-20-30">
                We analyze your vision thoroughly to ensure the roadmap is
                perfectly aligned with your end goals, setting the stage for
                product success.
              </p>
            </div>
            <div className="ml-[80px] relative w-[384px] h-[544px] rounded-[200px] overflow-hidden">
              <Image alt="Iderate" src="/images/Ideate.webp" fill />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page
