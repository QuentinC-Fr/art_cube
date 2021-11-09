import React from "react";
import ArtContainer from "../components/art/ArtContainer";

const ArtDisplay = () => {
  return (
    <div className="App">
      <h2>Art Display</h2>
      <div style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
        <ArtContainer />
      </div>
    </div>
  );
};

export default ArtDisplay;
