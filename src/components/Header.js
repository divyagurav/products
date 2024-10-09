import "./Header.css";
// import { CiHeart } from "react-icons/ci";
// import { CiSearch } from "react-icons/ci";
// import { PiLockSimpleLight } from "react-icons/pi";
// import { IoPersonOutline } from "react-icons/io5";
function Header() {
  return (
    <div>
      <div
        style={{ backgroundColor: "black", width: "auto", height: "20px" }}
      ></div>
      <div>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            textAlign: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          LOGO
        </h1>

        {/* <div className="icons">
          <CiSearch />
          <CiHeart />
          <PiLockSimpleLight />
          <IoPersonOutline />
        </div> */}
      </div>
      <div className="shop">
        <p>SHOP</p>
        <p>SKILLS</p>
        <p>STORIES</p>
        <p>ABOUT</p>
        <p>CONTACT US</p>
      </div>

      <div>
        <div>
          <h1
            style={{
              textAlign: "center",
              marginTop: "60px",
              fontSize: "30px",
            }}
          >
            DISCOVER OUR PRODUCTS
          </h1>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <div>
            {" "}
            Loorem Ipsum dolor sit amet consecture. Amer est postuere rhoncs
          </div>
          <div>
            {" "}
            scelerisque. Dolor integer scelertisque nivbh amet mi ut elementtum
            dolor
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
