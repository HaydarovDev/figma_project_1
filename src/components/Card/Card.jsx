import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=8"
      );
      setdata(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-5 mb-5 flex flex-wrap gap-5">
      {data.map((value) => {
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
