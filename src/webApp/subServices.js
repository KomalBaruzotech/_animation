import React, { Component, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

export default function SubServices() {
  const { id } = useParams();

  return (
    <>
      <div>
        {id}
        <div>
          {data
            .filter((service) => service.id === id)
            .map((service) => (
              <div key={service.id}>{service.SubValue} </div>
            ))}
        </div>
      </div>
    </>
  );
}
