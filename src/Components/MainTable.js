import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CryptoState } from '../Context/CryptoContext'
import { CoinList } from '../config/api'
import Table from 'react-bootstrap/Table';
import { Link, useParams } from 'react-router-dom';

const MainTable = () => {
    const { currency, symbol } = CryptoState()
    const [coinlist, setCoinlist] = useState([])
    const [loading, setLoading] = useState(true)
    // const {id} = useParams()
    const [search, setSearch] = useState("")

    const fetchTableData = async () => {
        const { data } = await axios.get(CoinList(currency))
        setCoinlist(data)
        setLoading(false)

    }

    useEffect(() => {
        fetchTableData()
    }, [currency])


    const handleSearch = () => {
        return coinlist.filter(
            (coin) =>
                coin.name.toLowerCase().includes(search) ||
                coin.symbol.toLowerCase().includes(search)
        );
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    console.log(coinlist, "coin list")

    return (
        <>
            <div className="    py-4 flex justify-center">
               <div className=" container  tablebox ">
                <Table striped bordered hover className='w-full overflow-hidden '>
                    <thead className='bg-yellow-500 text-black md:text-xl'>
                        <tr className=''>
                            {/* <th className='py-2'>#</th> */}
                            <th className='py-2'>Crypto Name</th>
                            <th className='py-2'>Symbol</th>
                            <th className='py-2'>24 h Change</th>
                            <th className='py-2'>Market Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinlist.map((coin) => {
                            const profit = coin.price_change_percentage_24h > 0;

                            return (
                                <>
                                    <Link to={`/coins/${coin.id}`} >
                                    
                                        <tr key={coin.id} className='text-center border-t border-gray-800 py-2 text-lg hover:bg-gray-500 hover:text-yellow-500'>
                                            {/* <td>{coin.index}</td> */}
                                            <td className='py-2'>{coin.name}</td>
                                            <td className='py-2 flex justify-center'> <div className="flex justify-venter items-center"><div className='text-center mx-2'><img src={coin.image} alt={coin.name} width={30} height={30} /></div> <span className='uppercase'>{coin.symbol}</span></div>  </td>
                                            <td className='py-2' style={{
                                                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                                                fontWeight: 500,
                                            }}>    {profit && "+"}
                                                {coin.price_change_percentage_24h.toFixed(2)}%</td>
                                            <td className='py-2'>{symbol}{" "}
                                                {numberWithCommas(
                                                    coin.market_cap.toString().slice(0, -6)
                                                )}</td>
                                        </tr>
                                    </Link>

                                </>
                            )
                        })}


                    </tbody>
                </Table>
               </div>
                
            </div>
        </>
    )
}

export default MainTable
