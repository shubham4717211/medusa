import { MinusSmIcon, PlusIcon } from "@heroicons/react/outline";
import { Link } from "@remix-run/react";
import { useContext, useState } from "react";
import {useCart, useUpdateLineItem, useDeleteLineItem } from "medusa-react";
import toast from "react-hot-toast";

interface ProductCardType {
  image: string;
  title: string;
  handle: string;
  quantity: number;
  id:string;
}

export default function ProductCardType({
  image,
  title,
  handle,
  quantity,
  id,
}: ProductCardType) {
  // const { cartView, updateCartViewDisplay, updateCheckoutStep } =
  //   useContext(DisplayContext);
  // const { cart, currencyCode, updateLineItem, removeLineItem } =
  //   useContext(StoreContext);
  const { cart } = useCart();

  const { mutate: deleteLineItem, isLoading: deleteLineItemLoading } = useDeleteLineItem(cart?.id!);
  const { mutate: updateLineItem, isLoading: updateLineItemLoading } = useUpdateLineItem(cart?.id!);

  const handleQtyChange = (action: string) => {
    if (action === "inc") {
      updateLineItem(
        {
          lineId: id,
          quantity:quantity+1,
        },
        {
          onSuccess: () => {
            toast('Cart updated!');
          },
        }
      );
    }

    if (action === "dec") {
      updateLineItem(
        {
          lineId: id,
          quantity:quantity-1,
        },
        {
          onSuccess: () => {
            toast('Cart updated!');
          },
        }
      );
    }
  };
  const removeCartItem = () => {
    deleteLineItem(
      {
        lineId: id,
      },
      {
        onSuccess: () => {
          toast('item removed from Cart!');
        },
      }
    );
  };
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-6">
      <Link to={`/products/${handle}`}>
        <div className="flex flex-col space-y-1 p-2 hover:bg-slate-400 hover:bg-opacity-25 cursor-pointer active:scale-95 transition ease-in-out duration-75">
          <img src={image} alt="" />
        </div>
      </Link>
      <div>
        <h3 className="pt-2 text-white text-[1.15rem] sm:text-xl">{title}</h3>
        {quantity ? <p className="text-slate-400">{quantity}</p> : ""}
        <div className="mt-4">
          {/* <h3 className="text-sm font-medium text-gray-900">Quantity</h3> */}
          <div className="mt-4 inline-flex rounded-md shadow-sm">
            <button
              className="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={() => handleQtyChange("dec")}
            >
              <MinusSmIcon
                className="-ml-2 mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
            <p className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {quantity}
            </p>
            <button
              className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={() => handleQtyChange("inc")}
            >
              <PlusIcon
                className="-ml-2 mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
            <button
              className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={() => removeCartItem()}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
