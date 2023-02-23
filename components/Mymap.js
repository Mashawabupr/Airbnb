import { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import * as geolib from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
function Mymap({ searchResults }) {
  let [selectedLocation, setLocation] = useState({});
  let centerCoords = geolib.getCenter(
    searchResults.map((item) => {
      return { longitude: item.long, latitude: item.lat };
    })
  );

  const [viewState, setViewState] = useState({
    longitude: centerCoords.longitude,
    latitude: centerCoords.latitude,
    zoom: 11,
    width: "100%",
    height: "100%",
  });

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const { latitude, longitude } = position.coords;

  //     setViewState({
  //       ...viewState,
  //       longitude: longitude,
  //       latitude: latitude,
  //       zoom: 15,
  //     });
  //   });
  // }, []);

  return (
    <Map
      {...viewState}
      onMove={(e) => setViewState(e.viewState)}
      mapStyle="mapbox://styles/marikanik/clefjukm5000701k4n75pkoma"
      mapboxAccessToken={process.env.map_key}
    >
      {searchResults.map((result) => {
        return (
          <div key={result.long}>
            <Marker longitude={result.long} latitude={result.lat}>
              <p
                onClick={() => setLocation(result)}
                className="animate-bounce cursor-pointer text-xl"
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>
            {selectedLocation.long === result.long && (
              <Popup
                offset={10}
                anchor="bottom"
                onClose={() => setLocation({})}
                closeOnClick={false}
                latitude={result.lat}
                longitude={result.long}
              >
                {result.title}
              </Popup>
            )}
          </div>
        );
      })}
    </Map>
  );
}

export default Mymap;
