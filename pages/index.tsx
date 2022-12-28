import Head from "next/head";
import {
  GreatSince,
  HappyClient,
  HeroHeaderline,
  NewsLetter,
} from "@/components";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto mb-36">
      <div className="mb-40">
        <HeroHeaderline />
      </div>
      <div className="mt-0.5 mx-28 px-2">
        <GreatSince />
      </div>
      <div className="mt-40 mx-28 px-2">
        <HappyClient />
      </div>
      <div className="mt-16 mb-36 mx-28 px-2">
        <NewsLetter />
      </div>
    </main>
  );
}
