"use client";

import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import CheckoutForm from "./checkoutForm";

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    addItem,
    totalPrice,
  } = useShoppingCart();

  // New state to handle showing the checkout form
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const handleCheckoutClick = () => {
    setShowCheckoutForm(true); // Show checkout form
  };

  const handleCloseModal = () => {
    setShowCheckoutForm(false); // Hide checkout form and close modal
    handleCartClick(); // Close the cart modal
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCloseModal}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          {/* Cart items */}
          {!showCheckoutForm ? (
            <div className="mt-8 flex-1 overflow-y-auto">
              <ul className="-my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                  <h1 className="py-6">You don’t have any items</h1>
                ) : (
                  <>
                    {Object.values(cartDetails ?? {}).map((entry) => (
                      <li key={entry.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <Image
                            src={entry.image as string}
                            alt="Product image"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-300">
                              <h3>{entry.name}</h3>
                              <p className="ml-4">${entry.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                              {entry.description}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center">
                              <button
                                type="button"
                                onClick={() =>
                                  entry.quantity > 1 &&
                                  addItem(entry, { count: -1 })
                                }
                                className={`px-2 py-1 text-gray-700 border rounded ${
                                  entry.quantity === 1
                                    ? "cursor-not-allowed opacity-50"
                                    : "hover:bg-gray-100"
                                }`}
                                disabled={entry.quantity === 1}
                              >
                                -
                              </button>
                              <p className="mx-2">QTY: {entry.quantity}</p>
                              <button
                                type="button"
                                onClick={() => addItem(entry, { count: 1 })}
                                className="px-2 py-1 text-gray-700 border rounded hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                            <div className="flex">
                              <button
                                type="button"
                                onClick={() => removeItem(entry.id)}
                                className="font-medium text-primary hover:text-primary/80"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          ) : (
            // Show the checkout form when it's in checkout mode
            <CheckoutForm />
          )}
          {/* Checkout footer */}
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-400">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-400">
              Shipping and taxes calculated at checkout
            </p>
            {!showCheckoutForm ? (
              <div className="mt-6">
                <Button onClick={handleCheckoutClick} className="w-full">
                  Proceed to Checkout
                </Button>
              </div>
            ) : (
              <div className="mt-6">
                <Button onClick={handleCloseModal} className="w-full">
                  Cancel
                </Button>
              </div>
            )}
            <div className="mt-6 flex justify-center text-center text-sm text-gray-400">
              <p>
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
