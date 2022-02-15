import Image from "next/image";
const colors = [
    'bg-blue-500',
    'bg-red-500',
    'bg-green-500',
    'bg-purple-500'
]

const LocationCard = ({ index, img, location, distance}) => {

  return (

<div className="cursor-pointer hover:-translate-y-3 transform transition duration-300 ease-out">
<div className="relative h-52 w-[310px]">
    <Image
      className="rounded-t-xl"
      src={img}
      layout="fill"
    />
</div>

<div className={`${colors[index]} h-40 p-5 text-lg text-white space-y-2 rounded-b-xl`}>
            <h4 className="text-3xl">{location}</h4>
            <p className="text-lg">{distance}</p>
        </div>
</div>
  )

};

export default LocationCard;
