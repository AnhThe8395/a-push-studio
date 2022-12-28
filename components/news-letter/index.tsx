import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="bg-[#F4F9FF] rounded-[75px] grid grid-cols-2">
      <div className="col-span-1 pl-[92px] flex flex-col justify-center gap-4">
        <h1 className="text-black font-bold text-[40px]">
          Subscribe Newsletter
        </h1>
        <p className="text-[#757575] text-lg">
          I will update good news and promotion service not spam
        </p>
      </div>
      <div
        className="col-span-1 flex flex-col justify-center relative h-[292px] bg-right bg-contain bg-no-repeat"
        style={{ backgroundImage: `url('../images/banner3.svg')` }}
      >
        <div
          className="absolute w-44 h-[154px] -z-10 -right-9 -top-14"
          style={{ backgroundImage: `url('../images/dot-2.svg')` }}
        ></div>
        <div
          className="bg-white border border-[#F1F1F1] w-fit p-2.5 rounded-[60px] flex items-center justify-between gap-8"
          style={{ boxShadow: "10px 20px 50px rgba(0, 0, 0, 0.15)" }}
        >
          <input
            placeholder="Enter your email address.."
            className="px-6 outline-none text-[#959595] text-base"
          />
          <button className="px-10 py-5 bg-[#2639ED] tracking-[.065em] text-white text-xl rounded-[68px]">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
