import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
//import FilterSidebar from "./components/FilterSidebar";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    // const newData = [];
    // for (const key of data) {
    //   newData.push({
    //     id: data[key].id,
    //     title: data[key].title,
    //     image: data[key].image,
    //     description: data[key].description,
    //   });
    // }
    setData(data);
  }, []);

  return (
    <div>
      <Header />
      <Main data={data} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
