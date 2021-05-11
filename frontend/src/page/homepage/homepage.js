import React, { useEffect, useState } from "react";
import "./homepage.scss";
import PreviewCollection from "../../components/preview-collection/preview-collection.js";
import axios from "axios";

const HomePage = () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:8000/api/robots");
      setShopData(data.data);
    }
    fetchData();
  }, []);

  return (
    <div className="home-page">
      <div className="container">
        <h2 className="mb-4">Robots</h2>
        <div className="row mt-2">
          {shopData.map((item, idx) => (
            <PreviewCollection key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
