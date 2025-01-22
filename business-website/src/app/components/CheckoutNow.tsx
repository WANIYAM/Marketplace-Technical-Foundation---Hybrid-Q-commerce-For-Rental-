"use client";

import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "../../../components/ui/button";
import { ProductCart } from "./AddToBag";



export default function CheckoutNow({
    id, // Accept id as a prop
    currency,
    image,
    name,
    price,
    description,
    price_id,  

}: ProductCart) {
    const { checkoutSingleItem} = useShoppingCart();
    function buynow(priceId:string){
        checkoutSingleItem(priceId)
    }
    const product = {
        id: id, // Ensure id is provided here
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(), // Convert the image URL
        price_id:price_id,
    };

    return (
        <Button
            onClick={() => {
                buynow(product.price_id)
            }}
        >
            Add to cart
        </Button>
    );
}
