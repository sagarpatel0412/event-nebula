// import { TileLayer } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./Location-map.module.scss";
import { LocationMapComponentInterface } from "../../interface/profile-interface";
// import leaflet from "leaflet";

function LocationMapComponent(props: LocationMapComponentInterface) {
  const mapRef = useRef<any>(null);
  const [activateMap, setActivateMap] = useState<boolean>(false);

  useEffect(() => {
    console.log("props.location", props.location);
    if (props.location.lat !== 0 && props.location.lng !== 0) {
      setActivateMap(true);
    }
  }, [props]);

  const icon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [30, 30],
  });

  return (
    <>
      {activateMap ? (
        <MapContainer
          key={props.activate}
          ref={mapRef}
          className={styles.location}
          center={[props.location.lat, props.location.lng]}
          zoom={12}
          scrollWheelZoom={false}
          style={{ zIndex: 0 }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[props.location?.lat, props.location?.lng]}
            icon={icon}
          >
            <Popup className={styles.leaflet_popup_content_wrapper}>
              You are here{" "}
              <strong>
                {props.profileDetail.firstname.charAt(0).toUpperCase() +
                  props.profileDetail.firstname.slice(1)}
              </strong>
            </Popup>
          </Marker>
        </MapContainer>
      ) : null}
    </>
  );
}

export default LocationMapComponent;
