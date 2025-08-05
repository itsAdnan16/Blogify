import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-3 bg-[#42273B] border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-2">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-5/12 p-6">
                        <div className="flex h-full flex-col justify-between">
                            {/* <div className="inline-flex items-center"> */}
                                <Logo width="50px" />
                            {/* </div> */}
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2025. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-6  lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3  text-xs font-semibold uppercase text-[#93778C]">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-[#70566D] hover:text-[#B89AB5]"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-[#70566D] hover:text-[#B89AB5]"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-[#70566D] hover:text-[#B89AB5]"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-[#70566D] hover:text-[#B89AB5]"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-6  lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3  text-xs font-semibold uppercase text-[#93778C]">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-[#70566D] hover:text-[#B89AB5]"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-[#70566D] hover:text-[#B89AB5]"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-[#70566D] hover:text-[#B89AB5]"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-[#70566D] hover:text-[#B89AB5]"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full py-6  lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3  text-xs font-semibold uppercase text-[#93778C]">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-[#70566D] hover:text-[#B89AB5]"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-[#70566D] hover:text-[#B89AB5]"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-[#70566D] hover:text-[#B89AB5]"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer