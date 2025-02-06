import React, { useEffect, useState } from "react";
import TableData from "../components/TableData";
import Context from "../components/Context"; 

import image3 from "../components/Assets/Image3.jpg";
import image5 from "../components/Assets/Image5.jpg";
import image10 from "../components/Assets/Image10.jpg";

const ApiConfig = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects?id=3&id=5&id=10")
      .then((response) => response.json())
      .then((result) => {
        const updatedData = result.map((item) => ({
          ...item,
          image:
            item.id === "3" ? image3 :
            item.id === "5" ? image5 :
            item.id === "10" ? image10 :
            "", 
          description: {
            positive: 
              item.id === "3" ? "Excellent camera quality and performance" :
              item.id === "5" ? "Innovative folding design and multitasking ability" :
              item.id === "10" ? "Compact design with great performance" : "",

            negative: 
              item.id === "3" ? "Expensive and lacks 5G support in some regions" :
              item.id === "5" ? "Very expensive and large for pocket use" :
              item.id === "10" ? "Smaller screen compared to other tablets" : "",
          },
        }));
        setData(updatedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Context> 
      <TableData data={data} />
    </Context>
  );
};

export default ApiConfig;
