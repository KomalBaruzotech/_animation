import React, { Component } from "react";
import { useParams } from "react-router";

export default function SubServices() {
    const { id } = useParams();
  return (
    <>
      <div>Hello{id}</div>
    </>
  );
}
