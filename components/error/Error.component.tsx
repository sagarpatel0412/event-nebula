import React from "react";
import styles from "./Error.module.scss";
import Link from "next/link";

function ErrorComponent() {
  return (
    <div className={styles.error}>
      <div>
        <p>Something Went Wrong</p>
        <Link href={"/"}>Go to homepage</Link>
        <br />
        <p style={{ fontSize: "15px", justifyContent: "center" }}>
          &copy; Nebula Corporation
        </p>
      </div>
    </div>
  );
}

export default ErrorComponent;
