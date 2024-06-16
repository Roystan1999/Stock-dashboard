import { MdArrowForwardIos } from "react-icons/md";
import { LuDot } from "react-icons/lu";

const chartOverview = () => {
  return (
    <div>
      <div className="pb-3 flex justify-between ">
        <div>
          <div className="flex  items-center">
            <h1>SPARD 500 F&O</h1>
            <MdArrowForwardIos />
          </div>
          <span className="text-gray-600 size-1">489.84</span>
        </div>

        <div className="flex ">
          <div className="items-center flex">
            <LuDot className="size-9 text-white" />
            <h1 className="font-normal text-xs	">S&P 500</h1>
          </div>
          <div className="items-center flex">
            <LuDot className="size-9 text-orange-400" />
            <h1 className="font-normal text-xs	">Moving average</h1>
          </div>
        </div>
      </div>

      {/* chart */}
      <div className="w-fill h-60 bg-red-500"></div>
    </div>
  );
};

export default chartOverview;
