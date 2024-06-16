import { MdArrowOutward } from "react-icons/md";

const Overview = () => {
  return (
    <div className="text-white flex-none w-fill pb-5 lg:w-5/12   ">
      <section>
        <div className="bg-neutral-950 p-9 rounded-lg ">
          <div className="flex gap-2 items-center pb-4">
            <h1 className="bg-zinc-900  font-bold	 rounded-2xl text-lg px-4">
              The Market is <span className="text-green-700">Bullish</span>
            </h1>
            <MdArrowOutward className="text-green-700 bg-zinc-900  rounded-2xl w-8 h-8" />
          </div>
          <div className="pt-16">
            <h1>What do you need today?</h1>
            <p className="font-bold pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, vel repellendus! Eius laudantium eveniet, ducimus,
              deleniti cupiditat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
