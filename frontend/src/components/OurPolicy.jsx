import React from "react";
import { RiCustomerServiceLine, RiExchangeFundsLine } from "react-icons/ri";
import {MdOutlineVerified} from "react-icons/md";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200">
      <div>
        <RiExchangeFundsLine size={48} className="mb-5 m-auto mb-5" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <MdOutlineVerified size={48} className="mb-5 m-auto mb-5" />
        <p className="font-semibold">7 Days return policy</p>
        <p className="text-gray-400">We provide 7 days return policy</p>
      </div>
      <div>
        <RiCustomerServiceLine size={48} className="mb-5 m-auto mb-5" />
        <p className="font-semibold">Best Customer service</p>
        <p className="text-gray-400">We provided 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
