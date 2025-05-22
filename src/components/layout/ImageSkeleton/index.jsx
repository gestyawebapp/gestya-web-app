"use client";

import styles from "./styles.module.css";
import { useState } from "react";
import Image from "next/image";

const SkeletonImage = ({ src, alt, width, height, className = "" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`${styles.wrapper} ${!loaded ? styles.loading : ""}`}
      style={{ width, height }}
    >
      {!loaded && <div className={styles.skeleton} />}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${styles.image} ${
          loaded ? styles.loaded : ""
        } ${className}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default SkeletonImage;
