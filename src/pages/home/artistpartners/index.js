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
    description:
      "An American house DJ and record producer, Sandy Rivera is known for his soulful tracks, such as “Finally”. He’s been active in house music since 1992.",
  },
  {
    image: "/images/artists/item2.png",
    mark: "/images/artists/imark2.png",
    name: "Sister Sledge",
    description:
      "Formed in Philadelphia in 1971, Sister Sledge achieved international success during the height of the disco era, with hits such as “We Are Family” and “He’s the Greatest Dancer”.",
  },
  {
    image: "/images/artists/item3.png",
    mark: "/images/artists/imark3.png",
    name: "Zucchero",
    description:
      "An Italian singer-songwriter known for singles such as “Diamante”, Zucchero is the “Father of Italian Blues”. He’s sold more than 60 million records in his career. ",
  },
  {
    image: "/images/artists/item4.png",
    mark: "/images/artists/imark4.png",
    name: "Gorillaz",
    description:
      "Formed by musician Damon Albarn and artist Jamie Hewlett, Gorillaz have had several platinum albums. An English virtual band, Gorillaz is uniquely positioned for metaverse events.",
  },
  {
    image: "/images/artists/item5.png",
    mark: "/images/artists/imark5.png",
    name: "Burak Yeter",
    description:
      "Burak Yeter is a Turkish DJ that works out of Amsterdam. His tracks blend progressive house, dance pop and synthpop, and he’s known for hits such as “Storm” and “Tuesday”.",
  },
  {
    image: "/images/artists/item6.png",
    mark: "/images/artists/imark6.png",
    name: "ARTBAT",
    description:
      "A Ukrainian duo, Artur and Batish have risen from Kyiv’s underground to become one of the most popular electronic acts worldwide.",
  },
  {
    image: "/images/artists/item7.png",
    mark: "/images/artists/imark7.png",
    name: "Takashi Murakami",
    description:
      "A Japanese contemporary artist, Takashi Murakami does paintings, sculptures, fashion and animation. He released his first NFTs in 2021: “Murakami Flowers”.",
  },
  {
    image: "/images/artists/item8.png",
    mark: "/images/artists/imark8.png",
    name: "Peggy Gou",
    description:
      "Peggy Gou is a South Korean DJ and record producer. Based in Berlin, Gou plays more than 100 live gigs per year and has produced hits such as “Starry Night”.",
  },
  {
    image: "/images/artists/item9.png",
    mark: "/images/artists/imark9.png",
    name: "Placido Domingo",
    description:
      "Well-known for his versatility, Placido Domingo is a Spanish opera singer and conductor who’s recorded over 100 complete operas.",
  },
  {
    image: "/images/artists/item10.png",
    mark: "/images/artists/imark10.png",
    name: "Andrea Bocelli",
    description:
      "An Italian operatic tenor and multi-instrumentalist, Andrea Bocelli is regarded as one of the greatest singing talents in the world. ",
  },
  {
    image: "/images/artists/item11.png",
    mark: "/images/artists/imark11.png",
    name: "José Carreras",
    description:
      "A Spanish operatic tenor, Carreras is known for his performances in the operas of Puccini and Verdi.",
  },
  {
    image: "/images/artists/item12.png",
    mark: "/images/artists/imark12.png",
    name: "Luciano",
    description:
      "A Chilean and Swiss DJ and producer, Luciano has been named Best Tech House DJ five times. Thanks to his efforts, electronic music has become more popular in Chile.",
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
      <div className={styles.artist2_description}>{item.description}</div>
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
