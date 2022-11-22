import { useParams } from '@remix-run/react';
import { MinusSmIcon, PlusIcon } from "@heroicons/react/outline";

import { useCart, useCreateLineItem, useProducts } from 'medusa-react';
import toast from 'react-hot-toast';
import { formatPrice } from '~/lib/formatPrice';
import { useState } from 'react';

export default function ProductSlug() {
  const { slug } = useParams();

  const { products } = useProducts(
    {
      handle: slug,
    },
    {}
  );

  const { cart } = useCart();

  const { mutate, isLoading } = useCreateLineItem(cart?.id!);

  const [product_quantity, setproduct_quantity] = useState(0);
  
  const handleQtyChange = (action: string) => {
    if (action === "inc"){
      setproduct_quantity(product_quantity + 1)
    }
    
    if (action === "dec"){
      if (product_quantity > 0){
        setproduct_quantity(product_quantity - 1)
      }
    }
    
  } 
  const addItem = () => {
    mutate(
      {
        variant_id: products?.slice(0, 1)[0].variants[0].id!,
        quantity: product_quantity,
      },
      {
        onSuccess: () => {
          toast('Added to Cart!');
        },
      }
    );
  };

  if (!products || !cart) {
    return <div></div>; // you can use skeleton loader here instead.
  }
  const product = products[0];
  return (
    <div className="flex flex-col items-center lg:justify-between lg:flex-row px-10 pb-44 sm:px-20 md:px-44 pt-44 max-w-[100rem] flex-grow w-screen">
      <img src={product.thumbnail!} className="h-96 w-auto" />
      <div>
        <h1 className="text-4xl pt-5 lg:pt-0 pb-5 lg:pb-10 text-white">
          {product.title}
        </h1>
        <p className="w-72">{product.description}</p>
        <p className="text-xl text-white pt-5">
          {formatPrice(product.variants[0], cart)}
        </p>
        {/* Quantity */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-900">
            Quantity
          </h3>
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
              {product_quantity}
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
          </div>
        </div>
        <button
          className="p-5 rounded-md w-full bg-slate-400 bg-opacity-25 mt-10 cursor-pointer active:scale-95 transition ease-in-out duration-75"
          onClick={() => addItem()}
        >
          Add item
        </button>
      </div>
    </div>
  );
}
