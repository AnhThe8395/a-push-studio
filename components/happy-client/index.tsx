import Image from "next/image";

const HappyClient = () => {
  return (
    <div className="grid grid-cols-1 gap-28">
      <div className="grid grid-cols-1 gap-4 text-center">
        <h1 className="text-black text-[40px] font-bold">
          What our happy client say
        </h1>
        <p className="text-[#757575] text-lg">
          Several selected clients, who already believe in our service.
        </p>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 flex items-center">
          <div className="-ml-8 relative w-fit">
            <div
              className="absolute w-[196px] h-[154px] -z-10 right-8 top-0"
              style={{ backgroundImage: `url('../images/dot-3.svg')` }}
            ></div>
            <Image
              src={"./images/avatar1.svg"}
              alt={""}
              className="w-[389px]"
              width={100}
              height={100}
            />
            <div className="border-[8.8px] border-[#FF007A] w-[120px] h-[120px] rounded-full absolute bottom-16 left-2 -z-10"></div>
          </div>
          <div className="grid grid-cols-1">
            <h2 className="text-black text-2xl font-bold">Matthew Paul</h2>
            <p className="my-5 max-w-[412px] text-base text-[#565656]">
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </p>
            <div className="mt-5 flex items-center gap-6">
              {Array(5)
                .fill(0)
                .map((item, idx) => (
                  <div
                    key={idx}
                    className="first:bg-[#2639ED] bg-[#E7F0FC] rounded-full w-4 h-4 cursor-pointer"
                  ></div>
                ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-end pl-4">
          <div className="relative w-full h-full">
            <Image
              src={"./images/avatar2.svg"}
              alt={""}
              className="w-[98px] absolute top-12"
              width={100}
              height={100}
            />
            <Image
              src={"./images/avatar3.svg"}
              alt={""}
              className="w-[68px] absolute top-48"
              width={100}
              height={100}
            />
            <Image
              src={"./images/avatar5.svg"}
              alt={""}
              className="w-[68px] absolute top-0 left-36"
              width={100}
              height={100}
            />
            <Image
              src={"./images/avatar6.svg"}
              alt={""}
              className="w-[120px] absolute top-28 left-32"
              width={100}
              height={100}
            />
            <Image
              src={"./images/avatar4.svg"}
              alt={""}
              className="w-[98px] absolute bottom-6 left-20"
              width={100}
              height={100}
            />
            <Image
              src={"./images/avatar7.svg"}
              alt={""}
              className="w-[68px] absolute bottom-16 right-16"
              width={100}
              height={100}
            />
            <Image
              src={"./images/avatar8.svg"}
              alt={""}
              className="w-[54px] absolute right-4 top-36"
              width={100}
              height={100}
            />
            <Image
              src={"./images/avatar9.svg"}
              alt={""}
              className="w-[54px] absolute top-12 right-16"
              width={100}
              height={100}
            />
            <div className="absolute -z-10 bg-[#FFF5DB] w-[184px] h-[184px] rounded-full left-8 top-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
