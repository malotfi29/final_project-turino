"use client"
import React from "react";
import { ThreeDots } from "react-loader-spinner";


function Loading({ width = "75", height = "40" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius="9"
      color="var(--color-primary)"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}
export default Loading;
