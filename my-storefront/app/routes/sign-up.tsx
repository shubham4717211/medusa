import { useState, useEffect } from 'react';
import { medusaClient } from '~/lib/config';

import type { Cart as CartType } from 'medusa-react/dist/types';
import ProductCardType from '../components/cartItemCard';
import { Link } from '@remix-run/react';

export default function Signup() {
  const [cart, setCart] = useState<CartType>();

  useEffect(() => {
    medusaClient.carts
      .retrieve(localStorage.getItem('cart_id')!)
      .then(({ cart }) => {
        setCart(cart);
      });
  }, [cart]);
  const handleSubmit= ()=>{}
  if (cart)
  return (
    <div className="flex flex-col items-center lg:justify-between lg:flex-row px-10 pb-44 sm:px-20 md:px-44 pt-44 max-w-[100rem] flex-grow w-screen">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-4 text-3xl text-center tracking-tight font-light dark:text-white">
            Register your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="first_name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.first_name}
              />
            </div>
            <div>
              <input
                id="last_name"
                name="last_name"
                type="text"
                autoComplete="last_name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.last_name}
              />
            </div>
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email Address"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.email}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.password}
              />
            </div>
            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.confirmPassword}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              // ref={buttonRef}
              className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-800 hover:bg-sky-900"
            >
              Register
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/sign-in">
                <a className="text-blue-600 hover:underline dark:text-blue-500">
                  Already have an account? Login
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}