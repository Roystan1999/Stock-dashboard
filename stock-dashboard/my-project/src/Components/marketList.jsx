import { useEffect, useState } from "react";
import ChartOverview from "./chartOverview";
import axios from "axios";
import { MarketListMockData } from "../mockData";

const MarketList = () => {
  const [marketData, setMarketData] = useState(MarketListMockData)

  useEffect(() => {
    axios
      .get("https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=A59781ZX13OHBFUM")
      .then((res) => {
        // setMarketData(res.data)
      })
  },[])


  return (
    <div className="text-white bg-neutral-950 pb-5	 p-3 rounded-lg w-full   sm:pl-10 pr-10 pt-8 lg:flex gap-7 ">
      <div></div>
      <section className="flex-none w-fill pb-5 lg:w-5/12 ">
        <div className=" rounded-lg ">
            {marketData.length > 0 && marketData.map((data, index) => {
              return <div className="flex gap-2  pb-2 justify-between" key={index}>
                <div>
                <h1 className="font-semibold text-sm pb-2  ">{data.companyName}</h1>
              </div>
              <div >
              <div className="flex gap-4 items-center  text-sm  pb-2">
                <h1>{data.changePercent}%</h1>
                <h1>{data.change}</h1>
                <h1 className={"rounded-lg px-2 " + (data.latestPrice > -1 ? "bg-green-900" : "bg-red-900")}>{(data.latestPrice > -1 && '+' )+data.latestPrice}</h1>
              </div>
              </div>  
              </div>
            })}
            </div>
      </section>

      <section className="w-full">
        <ChartOverview />
      </section>
    </div>
  );
};

export default MarketList;
