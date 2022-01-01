import Image from "next/Image";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

export default function CheckoutProduct({ id, title, price, description, rating, category, image, hasPrime }) {
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="GBP" />

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt=""/>
                        <p>FREE Next-Day Delivery</p>
                    </div>
                )}
                <button></button>
            </div>
        </div>
    );
}
