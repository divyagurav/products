import React, { useState } from "react";
//import Image from "next/image";
import styles from "./FilterOptionPanel.module.css";
import arrowl from "../../src/assets/arrow-l.png";
import arrowright from "../../src/assets/arrow-right.png";
import arrowup from "../../src/assets/arrow-up.png";
import arrowleft from "../../src/assets/arrow-left.png";
import active from "../../src/assets/active.png";

const FilterOptionPanel = ({ data, showCategory, toggleCategory }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("RECOMMENDED");
  function changeCurrentFilter(e) {
    if (e.target.tagName === "P") {
      setCurrentFilter(e.target.textContent);
      setShowFilters(false);
    }
  }
  function toggleFilters() {
    setShowFilters((prev) => !prev);
  }

  return (
    <div className={styles.panel}>
      <div className={styles.filterPanel}>
        <p className={styles.filterItemsCount}>{data.length}ITEMS</p>
        <div className={styles.filter} onClick={toggleCategory}>
          <img
            src={showCategory ? arrowl : arrowright}
            alt="Image of left arrow icon"
            width={16}
            height={16}
            className={styles.arrowImage}
          />
          <u className={styles.filterText}>
            {showCategory ? "HIDE FILTER" : "SHOW FILTER"}
          </u>
        </div>
      </div>
      <div className={styles.filter} onClick={toggleFilters}>
        <p className={styles.recommended}>{currentFilter}</p>

        <img
          src={showFilters ? arrowup : arrowleft}
          alt="Image of down arrow icon"
          width={16}
          height={16}
          className={styles.arrowImage}
        />
      </div>

      {showFilters && (
        <div className={styles.categoryContainer} onClick={changeCurrentFilter}>
          <p
            className={
              currentFilter === "RECOMMENDED" ? styles.active : styles.normal
            }
          >
            {currentFilter === "RECOMMENDED" && (
              <img src={active} alt="Image to check" width={16} height={16} />
            )}
            RECOMMENDED
          </p>
          <p
            className={
              currentFilter === "NEWEST FIRST" ? styles.active : styles.normal
            }
          >
            {currentFilter === "NEWEST FIRST" && (
              <img src={active} alt="Image to check" width={16} height={16} />
            )}
            NEWEST FIRST
          </p>
          <p
            className={
              currentFilter === "POPULAR" ? styles.active : styles.normal
            }
          >
            {currentFilter === "POPULAR" && (
              <img src={active} alt="Image to check" width={26} height={26} />
            )}
            POPULAR
          </p>
          <p
            className={
              currentFilter === "PRICE: HIGH TO LOW"
                ? styles.active
                : styles.normal
            }
          >
            {currentFilter === "PRICE: HIGH TO LOW" && (
              <img src={active} alt="Image to check" width={26} height={26} />
            )}
            PRICE: HIGH TO LOW
          </p>
          <p
            className={
              currentFilter === "PRICE: LOW TO HIGH"
                ? styles.active
                : styles.normal
            }
          >
            {currentFilter === "PRICE: LOW TO HIGH" && (
              <img src={active} alt="Image to check" width={26} height={26} />
            )}
            PRICE: LOW TO HIGH
          </p>
        </div>
      )}
    </div>
  );
};

export default FilterOptionPanel;
