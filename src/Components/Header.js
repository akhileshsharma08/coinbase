import React from 'react'
import { Link } from 'react-router-dom'

import { CryptoState } from '../Context/CryptoContext'

const Header = () => {
    const {currency,setCurrency} =CryptoState()

    console.log(currency,"currency symbol")
    return (
        <>
            <header className=" bg-gray-900 text-gray-600 body-font shadow-lg border-b border-yellow-500">
                <div className="  flex flex-wrap p-5 justify-between flex-col md:flex-row items-center">
                    <div>
                        <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-3xl text-yellow-500">CoinBase</span>
                    </Link>
                    </div>
                    
                    <div className="menubox flex justify-center items-center mx-2">
                        <div className="relative mx-2">
                            <select onChange={(e)=>{setCurrency(e.target.value)}} className="rounded border appearance-none border-yellow-500 bg-gray-900 text-yellow-500 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-base pl-3 pr-10">
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>

                            </select>
                            <span className="absolute right-0 top-0 h-full w-10 text-center text-yellow-500 pointer-events-none flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </div>
                        <div>
                        <Link to={'/login'} className="inline-flex py-2 text-lg items-center bg-yellow-500 hover:bg-yellow-400 text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">Log in</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
