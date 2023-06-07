import React from "react";
import styles from "./Loader.module.scss";

function LoaderComponent() {
  return (
    <div className={styles.loading}>
      {/* <h1 className="text-3xl font-bold">Nebula Events&nbsp;</h1> */}
      <br />
      <div>
        <h1 className={`${styles.loading_text} text-2xl font-bold`}>Loading</h1>
      </div>
    </div>
  );
}

export default LoaderComponent;
