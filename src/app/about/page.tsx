"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
interface Info {
  name: string;
  desctiption: string;
  image: string;
}
const AboutPage = () => {
  const [info, setInfo] = useState<Info | undefined>();
  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetch(`http://localhost:4000/companyInfo`);
      const results = await response.json();
      setInfo(results);
    };
    fetchInfo();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {info && (
        <>
          <div className="my-5">
            <Image
              className=""
              src={info?.image}
              alt="내 회사 사진"
              width={500}
              height={500}
            />
          </div>
          <h2 className="font-bold text-2xl">{info?.name}</h2>
          <h2 className="text-lg">{info?.desctiption}</h2>
        </>
      )}
    </div>
  );
};

export default AboutPage;
