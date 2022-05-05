import React from "react";
import { useGlobalStateContext } from "../../../context";
import styles from "./index.module.css";

const buybacks = [
  {
    image: "/images/buyback/item1.png",
    title: "BKS Staking",
    content:
      "Our staking model rewards holders who help the Backstage ecosystem maintain liquidity. We use fees and company revenue from other activities to distribute rewards.",
  },
  {
    image: "/images/buyback/item2.png",
    title: "BKS Burn",
    content:
      "When venues accept BKS tokens, a portion will be locked in a smart contract and later burned or utilized to support the ecosystem. ",
  },
  {
    image: "/images/buyback/item3.png",
    title: "BKS Buyback",
    content:
      " Each venue has a BKS staking and buyback agreement to support partner liquidity and create token buy pressure. We have millions in revenue committed, which will result in large buybacks. ",
  },
];

const burnflows = [
  {
    title: "STEP 1",
    image: "/images/buyback/fitem1.png",
    content: (
      <>
        <br />A partner venue signs with Backstage to use our PoS system.
      </>
    ),
  },
  {
    title: "STEP 2",
    image: "/images/buyback/fitem2.png",
    content: (
      <>
        <br />
        20% of BKS token revenue goes to staking for 2 years.
      </>
    ),
  },
  {
    title: "STEP 3",
    image: "/images/buyback/fitem3.png",
    content:
      "80% of BKS tokens are contractually locked for one month to support the ecosystem.",
  },
  {
    title: "STEP 4",
    image: "/images/buyback/fitem4.png",
    content:
      "After one month, the partner venue can choose to stake or exchange their remaining BKS tokens for fiat.",
  },
];

function BuyBackItem(props) {
  const item = props.item;
  return (
    <div className={styles.buyback}>
      <div className={styles.buyback_padding}>
        <img className={styles.buyback_image} src={item.image} alt="" />
        <div className={styles.buyback_title}>{item.title}</div>
        <div className={styles.buyback_content}>{item.content}</div>
      </div>
    </div>
  );
}

function BuyBacks() {
  return (
    <div className={styles.buybacks}>
      {buybacks.map((buyback) => (
        <BuyBackItem key={buyback.title} item={buyback} />
      ))}
    </div>
  );
}

function BurnFlow(props) {
  const item = props.item;
  return (
    <div className={styles.burnflow}>
      <div className={styles.burnflow_padding}>
        <div className={styles.burnflow_title}>{item.title}</div>
        <img className={styles.burnflow_image} src={item.image} alt="" />
        <div className={styles.burnflow_content}>{item.content}</div>
      </div>
    </div>
  );
}

function BurnFlows({ isMobile }) {
  return (
    <div className={styles.burnflows_wrapper}>
      <img
        className={styles.burnflows_back}
        src={
          isMobile
            ? "/images/buyback/flow_back_mobile.png"
            : "/images/buyback/flow_back.png"
        }
        alt=""
      />
      <div className={styles.burnflows}>
        {burnflows.map((flow) => (
          <BurnFlow key={flow.title} item={flow} />
        ))}
      </div>
    </div>
  );
}

function BuyBack() {
  const { isMobile } = useGlobalStateContext();

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url("/images/buyback_back.png")`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.content}>
        <div className={styles.title}>
          Token Dynamics: Buyback {!isMobile && <br />} and Burn
        </div>
        <BuyBacks />
        <div className={styles.flow_title}>Buyback and Burn Flow</div>
        <BurnFlows isMobile={isMobile} />
      </div>
    </div>
  );
}

export default BuyBack;
