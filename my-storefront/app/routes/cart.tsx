import { useState, useEffect } from 'react';
import { medusaClient } from '~/lib/config';

import type { Cart as CartType } from 'medusa-react/dist/types';
import ProductCardType from '../components/cartItemCard';

export default function Cart() {
  const [cart, setCart] = useState<CartType>();

  useEffect(() => {
    medusaClient.carts
      .retrieve(localStorage.getItem('cart_id')!)
      .then(({ cart }) => {
        setCart(cart);
      });
  }, [cart]);

  if (cart)
    return (
      <div className="px-10 sm:px-20 md:px-44 pt-44 max-w-[100rem] flex-grow w-screen">
        {cart.items.map((variant) => (
          
          <div key={variant.id}
          >
            {/* <img className="h-full" src={variant.thumbnail!} />
            <div>
              <h3 className="pt-2 text-white text-xl">{variant.title}</h3>
              <p className="text-slate-400">{variant.quantity}</p>
            </div> */}
            <ProductCardType
              key={variant.variant.product.id}
              id={variant.id}
              image={variant.variant.product.thumbnail ? variant.variant.product.thumbnail : ''}
              handle={variant.variant.product.handle ? variant.variant.product.handle : ''}
              title={variant.variant.product.title}
              quantity={variant.quantity}
            />
          </div>
        ))}
        <button
          className="p-5 rounded-md w-full bg-slate-400 bg-opacity-25 mt-10 cursor-pointer active:scale-95 transition ease-in-out duration-75"
          // onClick={() => {
          //   updateCheckoutStep(1);
          //   updateCartViewDisplay();
          //   router.push("/checkout");
          // }}
          // disabled={cart.items.length < 1 ? true : false}
        >
          Checkout
        </button>
      </div>
    );
}