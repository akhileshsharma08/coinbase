import React from 'react'
import '../App.css'

import Carausel from './Carausel'
import CoinTable from './CoinTable'


const Home = () => {
  return (
    <div className='mainbox py-50 bg-gray-900 text-white'>
      <div className="bannerImg">

        <div className="content pt-5">
          <h1 className='text-center text-yellow-500 md:text-8xl text-3xl font-bold py-4'>COINBASE </h1>
          <p className='text-gray-500 text-center text-2xl my-2'>Track and Trade Your Favorite Crypto in Real-Time</p>
        </div>
        <div className="container mx-auto pt-10  carasoulbox ">
          <Carausel/>
        </div>
      </div>

      <CoinTable />
    </div>
  )
}

export default Home
