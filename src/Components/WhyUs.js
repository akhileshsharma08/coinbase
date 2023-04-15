import React from 'react'

const WhyUs = () => {
    return (
        <div className='conatainer py-40 bg-black'>
            <h1 className="h1 md:text-8xl text-4xl font-bold text-center text-yellow-500  uppercase mb-18"><span className='text-white'>Why</span> Choose Us ?</h1>
            <div className="whybox mx-4 pt-20 flex-wrap flex flex-col justify-center md:flex-row items-center ">
                <div className="first lg:w-1/3 w-full flex-col justify-around items-center">
                    <div className="mychosebox  hover:text-gray-500  max-h-22  rounded-lg p-10 m-4">
                        <h1 className='text-center  text-3xl font-bold my-2'>CONNECT YOUR WALLET</h1>
                        <h5 className=' text-center text-xl'>Use Trust Wallet, Metamask or to connect to the app.</h5>
                    </div>
                    <div className="mychosebox max-h-22   cursor-pointer  rounded p-10 m-4">
                        <h1 className='text-center  text-3xl font-bold my-2'>SELECT YOUR QUANTITYT</h1>
                        <p className=' text-center text-xl'>Upload your crypto and set a title, description and price.</p>
                    </div>
                    <div className="mychosebox max-h-22   cursor-pointer  rounded p-10 m-4">
                        <h1 className='text-center  text-3xl font-bold my-2'>CONFIRM TRANSACTION</h1>
                        <p className=' text-center text-xl'>Earn by selling your crypto on our marketplace.</p>
                    </div>
                </div>


                <div className="imgbox  lg:w-1/3 w-full flex-col justify-center items-center">
                    <div className="container mx-auto flex justify-center items-center">
                        <div className='btclogo'  ></div>
                    </div>
                </div>


                <div className="second lg:w-1/3 w-full flex-col justify-around items-center">
                    <div className="mychosebox max-h-22   cursor-pointer  rounded p-10 m-4">
                        <h1 className='text-center  text-3xl font-bold my-2'>RECEIVE YOUR OWN NFTS</h1>
                        <p className=' text-center text-xl'>Invest all your crypto at one place on one platform.</p>
                    </div>
                    <div className="mychosebox max-h-22   cursor-pointer  rounded p-10 m-4">
                        <h1 className='text-center  text-3xl font-bold my-2'>TAKE A MARKET TO SELL</h1>
                        <p className=' text-center text-xl'>Discover, collect the right crypto collections to buy or sell.</p>
                    </div>
                    <div className="mychosebox  max-h-22  cursor-pointer  rounded p-10 m-4">
                        <h1 className='text-center  text-3xl font-bold my-2'>DRIVE YOUR COLLECTION</h1>
                        <p className=' text-center text-xl'>We make it easy to Discover, Invest and manage.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyUs
