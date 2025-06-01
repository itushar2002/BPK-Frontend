import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Item from "../components/Item";
import useProperties from "../hooks/useProperties";
import { PuffLoader } from "react-spinners";

const Listing = () => {
  const { isLoading, isError, data } = useProperties();

  const [filter, setFilter] = useState("");

  if (isError) return <div>Error fetching properties</div>;

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <PuffLoader
          height={80}
          width={80}
          radius={1}
          color="#555"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <main className="!mx-auto max-w-[1440px] !px-6 !lg:px-12 !pt-[50px] !pb-10 ">
      <div className="!mt-[90px] !mx-auto !max-w-[1440px] !px-6 !lg:!px-12 !py-10 !xl:py-22 !bg-[#dcdcdc] !rounded-3xl">
        <div>
          <SearchBar filter={filter} setFilter={setFilter} />
          {/* container */}
          <div
            className="
              !mt-8 
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-3 
              xl:grid-cols-4 
              gap-4 
              sm:gap-6 
              md:gap-6 
              xl:gap-6
            "
          >
            {data
              .filter((property) =>
                property.title.toLowerCase().includes(filter.toLowerCase())
              )
              .map((property) => (
                <Item key={property._id} property={property} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Listing;
