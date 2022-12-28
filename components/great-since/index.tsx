/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const GreatSince = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1 relative">
        <div className="-mx-8 relative w-fit">
          <Image
            src={"./images/banner2.svg"}
            alt={""}
            className="w-[550px]"
            width={100}
            height={100}
          />
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
            <Image
              src={"./icons/play-rounded-button.svg"}
              alt={""}
              className="w-[78px]"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="-z-10 right-10 bottom-0 absolute">
          <div className="bg-[#FFF5DB] w-32 h-32 rounded-full"></div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-end">
        <div className="py-2 pl-8 w-fit relative">
          <h1 className="text-black text-[40px] font-bold">
            Great Digital Product Agency since 2016
          </h1>
          <p className="text-[#565656] text-base mt-6">
            Our Business Plan is a written document describing a company's core
            business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </p>
          <div className="absolute top-0 left-0 -z-10">
            <div className="bg-[#EFF1FF] w-44 h-44 rounded-br-[100px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreatSince;
