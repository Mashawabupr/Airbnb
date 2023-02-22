import { useState } from "react";
import Map from "react-map-gl";

function Mymap() {
  const [viewState, setViewState] = useState({
    longitude: 44.783333,
    latitude: 41.716667,
    zoom: 5.5,
    width: "100%",
    height: "100%",
  });
  return (
    <Map
      {...viewState}
      onMove={(e) => setViewState(e.viewState)}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/marikanik/clefjukm5000701k4n75pkoma"
      mapboxAccessToken={process.env.map_key}
    />
  );
}

export default Mymap;
