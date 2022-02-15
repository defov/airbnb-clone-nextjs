import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]">
        <Image 
            src='/images/Airbnb_Banner.webp'
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
        />
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-base sm:text-lg">Not sure where to go? Perfect.</p>
            <button className="text-purple-500 font-bold bg-white px-10 py-4 shadow-md rounded-full my-3 hover:shadow-xl active:scale-90 transition">I'm flexible</button>
        </div>

    </div>
  )
}

export default Banner
