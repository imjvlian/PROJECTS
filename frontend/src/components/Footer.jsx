import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 dark:text-gray-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magnam
            doloribus incidunt mollitia consectetur nam at ut unde. Odio
            obcaecati illo perferendis rem dolorum temporibus ducimus libero,
            iure cum beatae?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 dark:text-gray-200">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 dark:text-gray-200">
            <li>+62085123456</li>
            <li>support@company.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center"> Made with 🤍 by JVLIAN | Copyright 2025 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
