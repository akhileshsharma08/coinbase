import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { chartDays } from "../config/data";
import { CryptoState } from "../Context/CryptoContext";
import { useParams } from "react-router-dom";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";



const MChart = ({ coin }) => {
    const [historicData, setHistoricData] = useState([]);
    const [days, setDays] = useState(1);
    const { currency } = CryptoState();
    const [flag, setflag] = useState(false);
    const { id } = useParams()

    const fetchHistoricData = async () => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
        setflag(true);
        setHistoricData(data.prices);
    };

    console.log(coin);

    useEffect(() => {
        fetchHistoricData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [days]);

    return (
        <>
            <div className="container w-full h-100 text-yellow-500">
                {!historicData | flag === false ? (
                    <div className="circleprogress">
                                {coin.name}
                    </div>) :
                    (
                        <>
                            <Line className='text-white w-full h-96 px-4'
                                data={{
                                    labels: historicData.map((coin) => {
                                        let date = new Date(coin[0]);
                                        let time =
                                            date.getHours() > 12
                                                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                                : `${date.getHours()}:${date.getMinutes()} AM`;
                                        return days === 1 ? time : date.toLocaleDateString();
                                    }),

                                    datasets: [
                                        {
                                            data: historicData.map((coin) => coin[1]),
                                            label: `Price ( Past ${days} Days ) in ${currency}`,
                                            borderColor: "#EEBC1D",
                                        },
                                    ],
                                }}
                                options={{
                                    elements: {
                                        point: {
                                            radius: 1,
                                        },
                                    },
                                }}
                            />
                            <div className="flex container px-8 justify-around mt-20  ">
                                {chartDays.map((day) => (
                                    <div>
                                          <button className="border border-yellow-500 mx-2 px-4 py-2 hover:bg-yellow-500 hover:text-white"
                                        key={day.value}
                                        onClick={() => {
                                            setDays(day.value);
                                            setflag(false);
                                        }}
                                    //   {day.value === days}
                                    >
                                        {day.label}
                                    </button>
                                    </div>
                                  
                                ))}
                            </div>

                        </>)}

     </div>

        </>
    )
}

export default MChart
