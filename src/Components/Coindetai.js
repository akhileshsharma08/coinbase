import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CryptoState } from '../Context/CryptoContext'
import { SingleCoin } from '../config/api'
import { useParams } from 'react-router-dom'
import DOMPurify from "dompurify";
import {Line} from 'react-chartjs-2' 
import Chart from './Chart'




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


  useEffect(() => {
    fetchSingleCoin()
  }, [currency])
 
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const profit = coin.price_change_percentage_24h > 0;

  console.log(coin,"coin")
  return (
    <>
      <div className="coinbox flex md:justify-center justify-center md:flex-row flex-col  bg-gray-900 text-white">
        <div className="coinImg container pt-10 w-1/4 flex justify-center mx-auto items-center">
          <div className="imgbox container  ">
            {coin.image ? <img src={coin.image.large} alt={coin.id} width={150} height={150} /> : null}
            <div className="coinDetail text-center">
              <h1 className='text-center text-yellow-500 text-3xl font-bold my-2 uppercase'>{coin.id}</h1>
              {/* <p>{coin.description.en}</p> */}
              <h2 className='uppercase text-center'> <span>{coin.symbol}</span></h2>
              <h6>Rank #{coin.coingecko_rank}</h6>
              {coin.market_data
                ? "$" +
                numberWithCommas(
                  coin.market_data.current_price.usd.toFixed(2)
                )
                : null}

              {/* <h2>{`${coin.market_data.current_price}.${coin.symbol}`}</h2> */}
              <p className='  '
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    coin.description ? coin.description.en.split(". ")[0] : ""
                  ),
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className="desc w-3/4 text-center my-5 flex justify-center mx-auto">
          <div className="div ">
{/* <Chart coin={coin}/> */}
          </div>

        </div>
      </div>
    </>
  )
}

export default Coindetail
