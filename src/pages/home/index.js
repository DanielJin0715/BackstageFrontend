import React, { useRef } from "react";
// import styles from "./index.module.css";

import TopBar from "./topbar";
import ArtistPartners from "./artistpartners";
import BuyBack from "./buyback";
import FutureEvents from "./futureevents";
import OurPartners from "./ourpartners";
import Roadmap from "./roadmap";

function HomePage() {
  const fRef = useRef();
  return (
    <div>
      <TopBar fRef={fRef} />
      <FutureEvents fRef={fRef} />
      <ArtistPartners />
      <BuyBack />
      <OurPartners />
      <Roadmap />
    </div>
  );
}

export default HomePage;
