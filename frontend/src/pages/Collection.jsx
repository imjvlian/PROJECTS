import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <div className="pt-30">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* FILTER OPTION */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
            <RiArrowDropDownLine
              className={`h-5 sm:hidden ${showFilter ? "rotate-180" : ""}`}
            />
          </p>
          {/* Category Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-200">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Men"}
                  onChange={toggleCategory}
                />{" "}
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Women"}
                  onChange={toggleCategory}
                />{" "}
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Kids"}
                  onChange={toggleCategory}
                />{" "}
                Kids
              </p>
            </div>
          </div>
          {/* Sub Category Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-200">
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Topwear"} />{" "}
                Topwear
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Bottomwear"} />{" "}
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Classic"} />{" "}
                Classic
              </p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            {/* Product Sort */}
            <select className="border-2 border-gray-300 text-sm px-2">
              <option className="dark:text-gray-700" value="relevant">
                Sort by: Relevant
              </option>
              <option className="dark:text-gray-700" value="low-high">
                Sort by: Low to High
              </option>
              <option className="dark:text-gray-700" value="high-low">
                Sort by: High to Low
              </option>
            </select>
          </div>
          {/* Map Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
