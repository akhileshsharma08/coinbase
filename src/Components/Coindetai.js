import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CryptoState } from '../Context/CryptoContext'
import { SingleCoin } from '../config/api'
import { useParams } from 'react-router-dom'
import DOMPurify from "dompurify";
import MChart from './MChart'




const Coindetail = () => {
  const [coin, setCoin] = useState("")
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const { currency, symbol } = CryptoState()

  const fetchSingleCoin = async () => {
    const { data } = await axios.get(SingleCoin(id))
    setCoin(data)
    setLoading(false)
  }
  let curId = currency.toLowerCase()

  useEffect(() => {
    fetchSingleCoin()
  }, [currency])

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const profit = coin.price_change_percentage_24h > 0;

  console.log(coin, "coin")
  return (
    <>
      <div className="coinbox flex md:justify-center justify-center md:flex-row flex-col min-h-screen  bg-gray-900 text-white">
        <div className="container w-full md:w-1/4 mx-auto  py-8">
          <div className="imgbox container mx-4 flex justify-center items-center flex-col   ">
            <div className="IMG">
              {coin.image ? <img src={coin.image.large} alt={coin.id} width={150} height={150} /> : null}
            </div>
            <div className="coinDetail text-center">
              <h1 className='text-center text-yellow-500 text-3xl font-bold my-2 uppercase'>{coin.id}</h1>
              <h2 className='uppercase text-center text-xl font-bold'> <span>{coin.symbol}</span></h2>
              <h4>Rank #{coin.coingecko_rank}</h4>
              <h1 className='text-yellow-500 text-xl font-bold'>{coin.market_data
                ? `${symbol}${" "}` +
                numberWithCommas(
                  coin.market_data.current_price[currency.toLowerCase()].toString()
                )
                : null}</h1>
              <div className="para py-2 h-28 overflow-y-auto scroll-yellow-500">
                <p className=' mx-4 '
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      coin.description ? coin.description.en : ""
                    ),
                  }}
                ></p>
              </div>

            </div>
          </div>
        </div>
        <div className="desc w-3/4 text-center my-5 flex justify-center mx-auto">
          <div className="div ">
            <MChart coin={coin} />
          </div>

        </div>
      </div>
    </>
  )
}

export default Coindetail



