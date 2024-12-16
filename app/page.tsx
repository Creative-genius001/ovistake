'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Stake from "./features/stake/stake";


export default function Home() {

  const router = useRouter()

  // useEffect(()=>{
  //   router.push('/stake')
  // })

  return (
    <>
      <Stake />
    </>
  );
}
