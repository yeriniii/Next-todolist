import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Info } from "@/types";

const AboutPage = async () => {
  const response = await fetch(`http://localhost:4000/companyInfo`);
  const results: Info = await response.json();

  return (
    <div className="flex flex-col items-center">
      {results && (
        <>
          <div className="my-5">
            <Image
              className=""
              src={results?.image}
              alt="내 회사 사진"
              width={500}
              height={500}
            />
          </div>
          <h2 className="font-bold text-2xl">{results?.name}</h2>
          <h2 className="text-lg">{results?.description}</h2>
        </>
      )}
    </div>
  );
};

export default AboutPage;
