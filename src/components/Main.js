import FilterOptionPanel from "./FilterOptionPanel";
import FilterSidebar from "./FilterSidebar";
import ItemsContainer from "./ItemsContainer";
import React from "react";
import { useState } from "react";
import styles from "./Main.module.css";

const Main = ({ data }) => {
  const [showCategory, setShowCategory] = useState(false);

  function toggleCategory() {
    setShowCategory((pre) => !pre);
  }
  return (
    <main className={styles.mainContainer}>
      <FilterOptionPanel
        data={data}
        showCategory={showCategory}
        toggleCategory={toggleCategory}
      />
      <section className={styles.mainContent}>
        {showCategory && <FilterSidebar />}
        <ItemsContainer data={data} />
      </section>
    </main>
  );
};

export default Main;
