import React from "react";
import styles from "./index.module.css";

const artists1 = [
  {
    image: "/images/artists/artist1.png",
    mark: "/images/artists/mark1.png",
    name: "Martin Garrix",
    content:
      "A Dutch DJ who was ranked number one from 2016-2018, Martin Garrix is best known for hit singles such as “Animals”, “Scared to Be Lonely” and “In the Name of Love”.",
  },
  {
    image: "/images/artists/artist2.png",
    mark: "/images/artists/mark2.png",
    name: "Sting",
    content:
      "Born Gordon Sumner, Sting has received 17 Grammy Awards as a solo artist and frontman of The Police. One of the world’s best-selling artists, Sting’s music includes elements of rock, jazz, reggae and classical.",
  },
  {
    image: "/images/artists/artist3.png",
    mark: "/images/artists/mark3.png",
    name: "Solomun",
    content:
      "Solomun is a Bosnian-German DJ and a four-time DJ Awards Winner for Best Melodic House DJ, Best Producer and Best DJ.",
  },
  {
    image: "/images/artists/artist4.png",
    mark: "/images/artists/mark4.png",
    name: "Kiss",
    content:
      "An American rock band formed in New York City in 1973, Kiss is well-known for their face paint and stage outfits. Kiss is regarded as one of the most influential rock bands of all time.",
  },
  {
    image: "/images/artists/artist5.png",
    mark: "/images/artists/mark5.png",
    name: "BANKSY & Warhol",
    content:
      "Backstage has partnered with Emergence Festival, an international festival of public art that’s hosting a Banksy & Warhol exhibition to celebrate the two famous artists.",
  },
];

const artists2 = [
  {
    image: "/images/artists/item1.png",
    mark: "/images/artists/imark1.png",
    name: "Sandy Rivera",
  },
  {
    image: "/images/artists/item2.png",
    mark: "/images/artists/imark2.png",
    name: "Sister Sledge",
  },
  {
    image: "/images/artists/item3.png",
    mark: "/images/artists/imark3.png",
    name: "Zucchero",
  },
  {
    image: "/images/artists/item4.png",
    mark: "/images/artists/imark4.png",
    name: "Gorillaz",
  },
  {
    image: "/images/artists/item5.png",
    mark: "/images/artists/imark5.png",
    name: "Burak Yeter",
  },
  {
    image: "/images/artists/item6.png",
    mark: "/images/artists/imark6.png",
    name: "ARTBAT",
  },
  {
    image: "/images/artists/item7.png",
    mark: "/images/artists/imark7.png",
    name: "Takashi Murakami",
  },
  {
    image: "/images/artists/item8.png",
    mark: "/images/artists/imark8.png",
    name: "Peggy Gou",
  },
  {
    image: "/images/artists/item9.png",
    mark: "/images/artists/imark9.png",
    name: "Placido Domingo",
  },
  {
    image: "/images/artists/item10.png",
    mark: "/images/artists/imark10.png",
    name: "Andrea Bocelli",
  },
  {
    image: "/images/artists/item11.png",
    mark: "/images/artists/imark11.png",
    name: "José Carreras",
  },
  {
    image: "/images/artists/item12.png",
    mark: "/images/artists/imark12.png",
    name: "Luciano",
  },
];

function Artist1(props) {
  const { item, position } = props;
  return (
    <div className={styles.artist1_wrapper}>
      <div
        className={`${styles.artist1_content_wrapper} ${
          position === "right" ? styles.artist1_content_wrapper_right : ""
        }`}
      >
        <div
          className={`${styles.artist1_content} ${
            position === "right" ? styles.artist1_content_right : ""
          }`}
        >
          <img src={item.mark} alt="" />
          <div className={styles.artist1_name}>{item.name}</div>
          <div className={styles.artist1_description}>{item.content}</div>
        </div>
      </div>
      <div
        className={`${styles.artist1_image_wrapper} ${
          position === "right" ? styles.artist1_image_wrapper_right : ""
        }`}
      >
        <img className={styles.artist1_image} src={item.image} alt="" />
      </div>
    </div>
  );
}

function Artists1() {
  return (
    <div className={styles.artists1}>
      {artists1.map((artist, i) => (
        <Artist1
          key={artist.name}
          item={artist}
          position={i % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}

function Artist2(props) {
  const item = props.item;
  return (
    <div className={styles.artist2}>
      <img className={styles.artist2_image} src={item.image} alt="" />
      <img className={styles.artist2_mark} src={item.mark} alt="" />
      <div className={styles.artist2_name}>{item.name}</div>
    </div>
  );
}

function Artists2() {
  return (
    <div className={styles.artists2}>
      {artists2.map((artist) => (
        <Artist2 key={artist.name} item={artist} />
      ))}
    </div>
  );
}

function ArtistPartners() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>Artists Already Using Backstage</div>
        <Artists1 />
        <Artists2 />
        <div className={styles.manymore}>
          ...and many more A-list celebrities, artists, venues <br /> and brands
          announcing in Q3!
        </div>
      </div>
    </div>
  );
}

export default ArtistPartners;
