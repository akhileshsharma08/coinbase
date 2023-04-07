import React from 'react'
import '../App.css'

import Carausel from './Carausel'
import CoinTable from './CoinTable'


const Home = () => {
  return (
    <div className='mainbox py-50 bg-gray-900 text-white'>
      <div className="bannerImg">
        <div className="bannerContent">
          <h1 className='text-center text-yellow-500 text-3xl md:text-6xl font-bold py-5'>CoinBase Crypto Tracker</h1>
          <p className='text-gray-400 text-center py-2 text-xl'>Track Your Favourite Crypto In Real Time</p>
      <Carausel />
        </div>
        <div className="caroauselbox my-5">
        </div>
      </div>
      <CoinTable/>
    </div>
  )
}

export default Home
