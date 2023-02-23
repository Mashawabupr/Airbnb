import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Smallcards from "../components/Smallcards";
import Mediumcards from "../components/Mediumcards";
import Largecard from "../components/Largecard";
<link
  href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
  rel="stylesheet"
></link>;
export default function Home({ dataMiniCards, dataMediumCards }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dataMiniCards?.map(({ img, location, distance }, i) => (
              <Smallcards
                key={i + img}
                location={location}
                distance={distance}
                img={img}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-5">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {dataMediumCards?.map(({ img, title }, i) => (
              <Mediumcards key={i + img} title={title} img={img} />
            ))}
          </div>
        </section>
        <Largecard
          img="https://links.papareact.com/0fm"
          title="ffff"
          description="32wgr"
          buttonText="3434t"
        />
      </main>
    </div>
  );
}
//on the server
export async function getStaticProps() {
  let dataMiniCards = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  let dataMediumCards = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      dataMiniCards,
      dataMediumCards,
    },
  };
}
