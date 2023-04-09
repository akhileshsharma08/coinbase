import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { Line } from "react-chartjs-2";
import { chartDays } from "../config/data";
import { CryptoState } from "../Context/CryptoContext";
import { useParams } from "react-router-dom";



const Chart = ({ coin }) => {
    const [historicData, setHistoricData] = useState([]);
    const [days, setDays] = useState(1);
    const { currency } = CryptoState();
    const [flag, setflag] = useState(false);
    const { id } = useParams()

    const fetchHistoricData = async () => {
        const { data } = await axios.get(HistoricalChart(id, days, currency));
        setflag(true);
        console.log(data, "data")
       setHistoricData(data.prices.prices)
    };

    // console.log(coin, "coinchart");
    console.log(id, "id");
    console.log(historicData, "historic");

    useEffect(() => {
        fetchHistoricData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [days]);

    return (
        <div>
            <Line
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

        </div>
    )
}

export default Chart
