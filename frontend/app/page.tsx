import Image from "next/image";
import React, { JSX } from "react";
import loginImage from '@/public/images/login3.jpg';
import Link from "next/link";
export default function Home(): JSX.Element {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 h-full hidden lg:block">
        <Image
          src={loginImage}
          alt="Inventory"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-center text-white text-3xl mb-2"> Company Name </h1>
          <div className="w-full max-w-md p-8 card rounded">
            <h2 className="text-3xl font-bold text-center text-white mb-6">
              Login
            </h2>
            <form className="space-y-5" autoComplete="off">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1" >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white  mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-white rounded"
                  />
                  <span className="ml-2 text-white">Remember me</span>
                </label>
                <a href="#" className="text-white hover:underline">
                  Forgot password?
                </a>
              </div>
              <Link href='user/dashboard' replace>
                <button
                  type="submit"
                  className="w-full btn-primary text-white font-semibold py-2 rounded-lg hover:btn-primary-shade transition cursor-pointer"
                >
                  Sign In
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
