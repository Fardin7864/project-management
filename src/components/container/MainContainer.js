import React from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";

const MainContainer = ({ children, hidlogo, hidefooter }) => {
  return (
    <div className="h-screen w-screen bg-slate-50 bg-no-repeat px-4 bg-corners pt-[14px] pb-5 flex flex-col  items-center">
      <div>
        <Image src={"/logo.svg"} width={240} height={100} alt="logo" />
      </div>
      {children}
      {!hidefooter && (
        <div className="text-center mt-auto flex flex-col gap-y-1">
          <p className="text-xs flex flex-row gap-x-2 justify-center items-center">
            <Link
              href="/privacy-policy"
              className="whitespace-nowrap hover:underline"
            >
              Privacy Policy
            </Link>
            <span
              className="inline-block border-l h-3"
              style={{ width: "1px" }}
            ></span>
            <Link
              href="/terms-and-conditions/"
              className="whitespace-nowrap hover:underline"
            >
              Terms and Conditions
            </Link>
            <span
              className="inline-block border-l h-3"
              style={{ width: "1px" }}
            ></span>
            <Link
              href="/terms-and-conditions/"
              className="whitespace-nowrap hover:underline"
            >
              Documentation
            </Link>
          </p>
          <p className="text-xs">
            All rights reserved &copy; {new Date().getFullYear()}
          </p>
        </div>
      )}
    </div>
  );
};

export default MainContainer;
