import React from "react";
import { useGlobalStateContext } from "../../../context";
import styles from "./index.module.css";

const items = [
  {
    image: "/images/future_items/bikos.png",
    title: "BiKoS Wallet",
    content:
      "Seamlessly and securely integrate crypto into business operations, buy and sell BKS tokens, and mint and store BKS NFTs.",
  },
  {
    image: "/images/future_items/metaverse.png",
    title: "Metaverse Events",
    content:
      "The BKS Metaverse enables universal access to event venues, from stadiums to concerts. Host hybrid events, meet artists, follow your team & more.",
  },
  {
    image: "/images/future_items/sale.png",
    title: "Point of Sale System",
    content:
      "The Backstage PoS allows businesses to accept crypto anytime, anywhere, as well as get instant liquidity through BKS token buybacks.",
  },
  {
    image: "/images/future_items/crypto.png",
    title: (
      <>
        Crypto Integration
        <br />& NFT Tickets
      </>
    ),
    content:
      "Unique NFT tickets offer a new way for venues and artists to connect with fans, along with lower fees and better margins.",
  },
  {
    image: "/images/future_items/launchpad.png",
    title: "Launchpad",
    content:
      "A fundraising platform for the industry — the meeting place for event organizers, venues and investors.",
  },
  {
    image: "/images/future_items/stage.png",
    title: "The STAGE",
    content:
      "The STAGE unifies all parties in the BKS Marketplace, enabling album releases, NFT ticket sales, and even networking & dealmaking. ",
  },
];

function Item(props) {
  const item = props.item;
  return (
    <div className={styles.item_wrapper}>
      {/* <img
        className={styles.item_back}
        src="/images/future_items/item_back.png"
        alt=""
      /> */}
      <div className={styles.item}>
        <div className={styles.item_padding}>
          <img
            className={styles.item_image}
            src={item.image}
            alt={item.title}
          />
          <div className={styles.item_title}>{item.title}</div>
          <div className={styles.item_content}>{item.content}</div>
        </div>
      </div>
    </div>
  );
}

function FutureItems() {
  return (
    <div className={styles.items_box}>
      {items.map((item) => (
        <Item key={item.title} item={item} />
      ))}
    </div>
  );
}

function FutureEvents({ fRef }) {
  const { isMobile } = useGlobalStateContext();

  return (
    <div
      className={styles.future_wrapper}
      style={{
        backgroundImage: `url("/images/future_back.png")`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.future}>
        <div className={styles.future_text} ref={fRef}>
          The Future of Events is {!isMobile && <br />} Powered by Blockchain
        </div>
        <FutureItems />
      </div>
    </div>
  );
}

export default FutureEvents;
