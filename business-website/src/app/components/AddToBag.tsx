"use client";

import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Button } from "../../../components/ui/button";

export interface ProductCart {
    id: string; // Add id to the interface
    name: string;
    description: string;
    price: number;
    currency: string;
    image: SanityImageSource;
    price_id:string
}

export default function AddToBag({
    id, // Accept id as a prop
    currency,
    image,
    name,
    price,
    description,
}: ProductCart) {
    const { addItem, handleCartClick } = useShoppingCart();
    const product = {
        id: id, // Ensure id is provided here
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(), // Convert the image URL
    };

    return (
        <Button
            onClick={() => {
                addItem(product);
                handleCartClick();
            }}
        >
            Add to cart
        </Button>
    );
}
