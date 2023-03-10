import { HeartIcon, StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'


const InfoCard = ({
    id,
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) => {
    const router = useRouter()

    return (
        <div
            onClick={() => {
                router.push(`/properties/${id}`)
            }}
            className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t"
        >
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-2xl"
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2" />
                <p className="pt-2 text-sm flex-grow text-gray-500">
                    {description}
                </p>
                <div className="flex justify-between pt-5 items-end">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-yellow-400" />
                        {star}
                    </p>
                    <div>
                        <p className="text-lg font-semibold pb-2 lg:text-2xl">
                            {price}
                        </p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
