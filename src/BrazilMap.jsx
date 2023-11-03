import { VectorMap } from "@react-jvectormap/core";
import { southAmericaMill } from "@react-jvectormap/southamerica";
import brMill from "./brMill.json"
import React from "react";
import { pins } from "./Pins";
function BrazilMap() {
  return (
    <div style={{ margin: "auto", width: "700px", height: "600px", display:"flex" }}>
      <VectorMap
        map={brMill}
        containerStyle={{
          width: "700px",
          height: "600px",
        }}
        backgroundColor="#282c34"
        markers={pins}
        markerStyle={{
          initial: {
            fill: "red",
          },
        }}
      />
            <VectorMap
        map={southAmericaMill}
        containerStyle={{
          width: "700px",
          height: "600px",
        }}
        backgroundColor="#282c34"
        markers={pins}
        markerStyle={{
          initial: {
            fill: "red",
          },
        }}
      />
    </div>
  );
}

export default BrazilMap;
