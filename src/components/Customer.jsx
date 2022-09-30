import React from "react";
import { useState, useEffect } from "react";

const Customer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/weather")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((weather) => {
          return (
            <>
              <div className="card m-4 p-1 bg-success text-white">
                <p className="card-text">id: {weather.id}</p>
                <h5 className="card-title">
                  temperature: {weather.temperature}
                </h5>
                <h5 className="card-title">location: {weather.location}</h5>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Customer;
