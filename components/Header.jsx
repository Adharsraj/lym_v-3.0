'use client'

import Image from "next/image"
import Link from "next/link"


export default function Header(){

    return(
        <Link href="/">
        <Image
        width={100}
        height={80}
          id="logo"
          className="lg:w-[106px] lg:h-[80px] md:w-16 w-24 logo"
          src="https://lymdatalabs.s3.ap-south-1.amazonaws.com/lym+website/Companylogo_lok0s3_fgcea5.svg"
          alt="companylogo"
        />{" "}
      </Link>
       )
}