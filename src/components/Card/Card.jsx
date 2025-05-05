import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [data, setdata] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=8"
        );
        setdata(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  
  const filteredData = search
    ? data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : data;

  return (
    <div className="mt-5 mb-5 flex flex-wrap gap-5">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border-2 rounded outline-0 border-blue-500 pt-2 pb-2 pl-2"
        type="text"
        placeholder="Searching..."
      />

      {filteredData.map((value) => {
        return (
          <div key={value.id} className="w-[335px] justify-between p-5">
            <img className="w-full h-[300px]" src={value.image} alt="" />
            <div className="text pt-5">
              <p className="text-2xl">{value.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
