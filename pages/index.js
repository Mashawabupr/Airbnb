import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/" />
      </Head>
      <Header />
      <Banner />
    </div>
  );
};

export default Home;
