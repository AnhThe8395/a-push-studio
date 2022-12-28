import Image from "next/image";

const HeroHeaderline = () => {
  return (
    <div className="grid grid-cols-11">
      <div className="col-span-5 flex flex-col justify-center overflow-hidden relative">
        <div className="bg-[#DAE9FF] w-32 h-32 rounded-full -right-16 absolute top-0"></div>
        <div className="ml-28 pl-2 mr-24">
          <h1 className="text-black font-bold text-[40px]">
            A Digital Product Agency
          </h1>
          <p className="mt-10 mb-8 text-[#565656] text-base">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <button className="px-10 py-5 bg-[#2639ED] tracking-[.065em] text-white text-xl rounded-[68px]">
            Contact Now
          </button>
          <div className="absolute bottom-0 left-[68px] -z-10 hidden 2xl:block">
            <Image
              src={"./images/dot-ornament.svg"}
              alt={""}
              className="w-[404px]"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="col-span-6 relative">
        <Image
          src={"./images/banner1.svg"}
          alt={""}
          className="w-full"
          width={100}
          height={100}
        />
        <div className="absolute right-[120px] -bottom-[96px] -z-10">
          <div className="w-44 h-44 bg-[#FFF5DB] rounded-br-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeaderline;
