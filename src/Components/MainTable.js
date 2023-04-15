import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CryptoState } from '../Context/CryptoContext'
import { CoinList } from '../config/api'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const MainTable = () => {
    const { currency, symbol } = CryptoState()
    const [coinlist, setCoinlist] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState([]);

    const [search, setSearch] = useState("")

    const fetchTableData = async () => {
        const { data } = await axios.get(CoinList(currency,currentPage))
        setCoinlist(data)
        setLoading(false)

    }

    useEffect(() => {
        fetchTableData()
    }, [currency,currentPage])


    const handleSearch = () => {
        return coinlist.filter(
            (coin) =>
                coin.name.toLowerCase().includes(search) ||
                coin.symbol.toLowerCase().includes(search)
        );
    };

    const paginationButtons = [];
    for (let i = 1; i <= 5; i++) {
      paginationButtons.push(
        <button id='mybtnpage' 
          key={i}
          onClick={() => setCurrentPage(i)}
          className={i === currentPage ? "activePagi" : ""}
        >
          {i}
        </button>
      );
    }
  
    const scrollMarket = () => {
      window.scrollTo({
        top: window.pageYOffset - 800,
        behavior: "smooth",
      });
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    console.log(coinlist, "coin list")
    const scrollTop = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
    };

    return (
        <>

            <div className="    py-4 flex justify-center">
                <div className=" container  tablebox ">
                    <Table striped bordered hover className='w-full overflow-hidden '>
                        <ul className='bg-yellow-500 text-black md:text-xl'>
                            <li className=''>
                                <ul className='flex justify-around items-center font-bold'>
                                    <li className='py-2'>Crypto Name</li>
                                    <li className='py-2'>Symbol</li>
                                    <li className='py-2'>24 h Change</li>
                                    <li className='py-2'>Market Price</li>
                                </ul>

                            </li>
                        </ul>
                        <ul className=''>
                            {coinlist.map((coin) => {
                                const profit = coin.price_change_percentage_24h > 0;

                                return (
                                    <>
                                        <Link
                                            onClick={scrollTop}
                                            to={`/coins/${coin.id}`}
                                            className="coin-row"
                                            key={coin.id}
                                        >

                                            <li className='text-center border-t border-gray-800 py-2 text-lg hover:bg-gray-500 hover:text-yellow-500'>

                                                <ul className='flex justify-around items-center font-bold'>
                                                    <div className="w-1/4"> <li className='py-2'>{coin.name}</li></div>
                                                   <div className="w-1/4">
                                                    <li className='py-2 flex justify-center'> <div className="flex justify-venter items-center"><div className='text-center mx-2'><img src={coin.image} alt={coin.name} width={30} height={30} /></div> <span className='uppercase'>{coin.symbol}</span></div>  </li>
                                                   </div>
                                                   <div className="w-1/4">
                                                      <li className='py-2' style={{
                                                        color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                                                        fontWeight: 500,
                                                    }}>    {profit && "+"}
                                                        {coin.price_change_percentage_24h.toFixed(2)}%</li>
                                                   </div>
                                                   <div className="w-1/4">
                                                    <li className='py-2'>{symbol}{" "}
                                                        {numberWithCommas(
                                                            coin.market_cap.toString().slice(0, -6)
                                                        )}</li>
                                                   </div>
                                                    
                                                </ul>
                                            </li>
                                        </Link>

                                    </>
                                )
                            })}


                        </ul>
                    </Table>
                </div>

            </div>
                <div
              onClick={scrollMarket}
              className="flex justify-center items-center py-4 mx-4"
            >
              {paginationButtons}
            </div>
        </>
    )
}

export default MainTable
