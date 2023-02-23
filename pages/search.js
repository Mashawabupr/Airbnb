import React from "react";
import Header from "../components/Header";
import InfoCards from "../components/InfoCards";
import Mymap from "../components/Mymap";
import { useRouter } from "next/router";
import { format } from "date-fns";
function Search({ searchResults }) {
  let router = useRouter();
  let { location, endDate, startDate, guests } = router.query;
  let gape = `${format(new Date(startDate), "dd MMMM yy")} - ${format(
    new Date(endDate),
    "dd MMMM yy"
  )}`;
  return (
    <div>
      <Header
        placeholder={`${location}  |  ${gape}  |  ${guests} ${
          guests > 1 ? "guests" : "guest"
        }`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            100+ Stays - {gape} for {guests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          {searchResults.map((item) => (
            <InfoCards key={item.img} {...item} />
          ))}
        </section>
        <section className="hidden xl:inline-flex active:cursor-pointer xl:min-w-[600px] h-[600px]">
          <Mymap searchResults={searchResults} />
        </section>
      </main>
    </div>
  );
}

export default Search;
export async function getServerSideProps() {
  let searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
