import React, { useState } from 'react'
import MainTable from './MainTable'
const CoinTable = () => {
    const [search, setSearch] = useState("")
    return (
        <>
            <div className="tablebox bg-gray-900">
                <h1 className='text-center text-2xl text-yellow-500 py-4'>Get Crypto Details As Per Market Cap </h1>
                <div className="container mx-auto flex justify-center">
                    {/* <div className="searchbox w-full mx-2">
                        <input type="text" name='name' onChange={(e) => { setSearch(e.target.value) }} className='bg-gray-900 border w-full border-yellow-500 p-3 text-xl text-yellow-500' placeholder='Search Your Coin Here ..' />
                    </div> */}
                </div>
                    <MainTable/>
            </div>
        </>
    )
}

export default CoinTable
