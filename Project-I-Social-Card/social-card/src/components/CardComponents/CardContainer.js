import React from "react";
import "./Card.css";

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

function CardContainer() {
  return (
    <div>
      <CardBanner />
      <CardContent />
      <CardContainer />
    </div>
  );
}

export default CardContainer;
