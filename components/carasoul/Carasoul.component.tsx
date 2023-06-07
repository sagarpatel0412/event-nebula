import React, { useState, useEffect, useRef } from "react";
import { CARASOUL_DATA, CarasoulDataInterface } from "../../helpers/essentials";
import styles from "./Carasoul.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

function CarasoulComponent() {
  const [carasoul, setCarasoul] =
    useState<Array<CarasoulDataInterface>>(CARASOUL_DATA);
  const [carasoulIndex, setCarasoulIndex] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [showCarasoul, setShowCarasoul] = useState<any>(carasoul[0]);
  const autoPlayRef = useRef<any>();

  useEffect(() => {
    autoPlayRef.current = onNext;
  });

  useEffect(() => {
    if (autoPlay) {
      console.log("autoplay is on");
      const play = () => {
        autoPlayRef.current();
      };

      const interval = setInterval(play, 5 * 1000);
      return () => clearInterval(interval);
    } else {
      console.log("autoplay is off");
    }
  }, [autoPlay]);

  const onPrevious = (): void => {
    if (carasoulIndex <= carasoul.length) {
      if (carasoulIndex !== 0) {
        var num = carasoulIndex - 1;
        setCarasoulIndex(num);
        setShowCarasoul(carasoul[num]);
      } else if (carasoulIndex === 0) {
        var num = carasoul.length - 1;
        setCarasoulIndex(num);
        setShowCarasoul(carasoul[num]);
      }
    }
  };

  const onNext = (): void => {
    if (carasoulIndex < carasoul.length - 1) {
      var num = carasoulIndex + 1;
      setCarasoulIndex(num);
      setShowCarasoul(carasoul[num]);
    } else if (carasoulIndex === carasoul.length - 1) {
      var num = 0;
      setCarasoulIndex(0);
      setShowCarasoul(carasoul[0]);
    }
  };

  const autoPlayTuner = (): void => {
    setAutoPlay(!autoPlay);
  };

  return (
    <div className={styles.carasoul}>
      <button
        type="button"
        className={styles.carasoulbutton1}
        onClick={() => onPrevious()}
        disabled={
          autoPlay
            ? true
            : typeof showCarasoul !== "undefined"
            ? Object.keys(showCarasoul).length > 0
              ? false
              : true
            : false
        }
      >
        &#10094;
      </button>
      {showCarasoul?.type === "image" ? (
        <img
          src={showCarasoul?.link}
          alt={showCarasoul?.alt}
          height={"300px"}
          width={"600px"}
        />
      ) : (
        <iframe src={showCarasoul?.link} height={"300px"} width={"600px"} />
      )}

      <button
        type="button"
        className={styles.carasoulbutton2}
        onClick={() => onNext()}
        disabled={
          autoPlay
            ? true
            : typeof showCarasoul !== "undefined"
            ? Object.keys(showCarasoul).length > 0
              ? false
              : true
            : false
        }
      >
        &#10095;
      </button>
      <button
        type="button"
        className={styles.carasoulbutton3}
        onClick={() => autoPlayTuner()}
      >
        {autoPlay ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
    </div>
  );
}

export default CarasoulComponent;
