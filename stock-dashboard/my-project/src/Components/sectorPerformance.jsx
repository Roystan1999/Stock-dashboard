import { useEffect, useState } from "react";
import axios from "axios";
import { sectorMockData } from "../mockData";

const SectorPerformance = () => {
  const [sectorData, setSectorData] = useState(sectorMockData);

  useEffect(() => {
    axios
      .get("https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=A59781ZX13OHBFUM")
      .then((res) => {
        // setSectorData(res.data);
      })
  },[])

  return (
    <div className="text-white w-full">
      <div className="bg-neutral-950 p-9 rounded-lg w-full sm:flex gap-3 justify-between md:gap-6 h-72 overflow-y-auto">
        <div class="flex gap-28 justify-between">
          <div>
            <h1 className="font-bold">Sector performance</h1>
            <div className="mt-5">
              <div>
                <h1 className="font-bold underline underline-offset-8 pb-2 decoration-purple-500">
                  All Sectors
                </h1>
                {sectorData.length && sectorData.filter((val, i) => i < 6).map((data, ind) => {
                  return <div key={ind} className="flex gap-28 justify-between">
                    <div><span className="text-zinc-500">{data.name}</span></div>
                    <div><span className={data.performance > 0 ? "text-green-700" : "text-red-700"}>{(data.performance > 1 && '+' ) + data.performance}</span></div>
                  </div>
                })}
              </div>
            </div>
          </div>
          <div>
            <h6 className="text-zinc-500 text-right">% price change</h6>
            <div className="mt-5">
            {sectorData.length && sectorData.filter((val, i) => i > 5 && i< 13).map((data, ind) => {
              return <div key={ind} className="flex gap-28 justify-between">
                <div><span className="text-zinc-500">{data.name}</span></div>
                <div><span className={data.performance > 0 ? "text-green-700" : "text-red-700"}>{(data.performance > 1 && '+' ) + data.performance}</span></div>
              </div>
            })}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SectorPerformance;
