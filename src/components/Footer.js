import React from "react";
//import Image from "next/image";
import styles from "./Footer.module.css";
import united from "../../src/assets/United States of America (US).png";
import insta from "../../src/assets/Insta.png";
import ab from "../../src/assets/a.png";
import group1 from "../../src/assets/Group 136188.png";
import group2 from "../../src/assets/Group 136192.png";
import group3 from "../../src/assets/Group 136193.png";
import group4 from "../../src/assets/Group 136194.png";
import group5 from "../../src/assets/Group 136195.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <section className={styles.topFooter}>
        <div className={styles.topLeftFooter}>
          <p className={styles.headText}>BE THE FIRST TO KNOW</p>
          <p className={styles.smallText}>
            Sign up for updates from metta muse.
          </p>
          <form>
            <input
              type="text"
              placeholder="Enter your e-mail..."
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeBtn}>
              SUBSCRIBE
            </button>
          </form>
        </div>
        <div className={styles.topLeftFooter}>
          <p className={styles.headText}>CONTACT US</p>
          <p className={styles.para}>+44 221 133 5360</p>
          <p className={styles.para}>customercare@mettamuse.com</p>
          <p className={styles.headText}>CURRENCY</p>
          <div className={styles.currency}>
            <img
              src={united}
              alt="Image of United states of America flag"
              width={24}
              height={24}
            />
            <p>+ USD</p>
          </div>
          <p className={styles.transactionInfo}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </section>
      <div className={styles.horizontalLine}></div>
      <section className={styles.bottomFooter}>
        <div className={styles.bottomLeftFooter}>
          <div>
            <p className={styles.bottomFooterHeads}>metta muse</p>
            <div className={styles.bottomFooterText}>
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>Eu Compliances Docs</p>
            </div>
          </div>
          <div>
            <p className={styles.bottomFooterHeads}>QUICK LINKS</p>
            <div className={styles.bottomFooterText}>
              <p>Orders & Shipping</p>
              <p>Join/Login as a Seller</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
        <div className={styles.bottomRightFooter}>
          <p className={styles.bottomFooterHeads}>FOLLOW US</p>
          <div className={styles.bottomFooterIcons}>
            <img src={insta} alt="Icon of Insta" width={32} height={32} />
            <img src={ab} alt="Icon of linkedIn" width={30} height={30} />
          </div>
          <p className={styles.bottomFooterHeads}>metta muse ACCEPTS</p>
          <div className={styles.bottomFooterIcons}>
            <img
              src="/Group 136188.png"
              alt="Image of gpay"
              width={56}
              height={35}
              className={styles.payIcons}
            />
            <img
              src={group1}
              alt="Image of mastercard"
              width={56}
              height={35}
              className={styles.payIcons}
            />
            <img
              src={group2}
              alt="Image of paypal"
              width={56}
              height={35}
              className={styles.payIcons}
            />
            <img
              src={group3}
              alt="Image of amex pay"
              width={56}
              height={35}
              className={styles.payIcons}
            />
            <img
              src={group4}
              alt="Image of apple pay"
              width={56}
              height={35}
              className={styles.payIcons}
            />
            <img
              src={group5}
              alt="Image of Pay"
              width={56}
              height={35}
              className={styles.payIcons}
            />
          </div>
        </div>
      </section>
      <p className={styles.copyright}>
        Copyright @metta muse. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
