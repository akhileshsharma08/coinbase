import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CryptoState } from '../Context/CryptoContext'
import { SingleCoin } from '../config/api'
import { useParams } from 'react-router-dom'




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


  const profit = coin.price_change_percentage_24h > 0;

  console.log(coin)
  return (
    <>
      <div className="coinbox">
        <div className="coinImg">
          <img src='' alt={coin.name} width={100} height={100} />
          <div className="coinDetail">
            <h1 className='text-center text-yellow-500 text-xl'>{SingleCoin.name}</h1>
            <p>{coin.description.en}</p>
            <h5>{coin.symbol}
              <span style={{
                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                fontWeight: 500,
              }}>{profit && "+"}
                {coin.market_data.price_change_24h.toFixed(2)}%
              </span>
            </h5>
            <h2>{`${coin.market_data.current_price}.${coin.symbol}`}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coindetail
