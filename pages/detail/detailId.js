import React from "react";
import {
  Description,
  Footer,
  Header,
  PageHeaders,
  Review,
  TypeHotel,
} from "../../components";
import styles from "../../styles/Home.module.css";
function detailId() {
  return (
    <div className="xl:px-[100px]">
      <Header />
      <div className={styles.container}>
        <div className="pb-5">
          <PageHeaders />
        </div>
        <Description />
        <TypeHotel />
        <Review />
      </div>
      <Footer />
    </div>
  );
}
export default detailId;
