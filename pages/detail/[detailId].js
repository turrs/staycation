import React, { useEffect, useState } from "react";
import Axios from "../../axios";
import { LoadingOutlined } from "@ant-design/icons";
import {
  Description,
  Footer,
  Header,
  PageHeaders,
  Review,
  TypeHotel,
} from "../../components";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
export default function DetailId() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    setLoading(true);
    const res = await Axios.get("landing-page");
    setData(res.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className="xl:px-[100px]">
      <Header />
      <div className={styles.container}>
        {loading ? (
          <>
            <div className="flex justify-center items-center p-20">
              <LoadingOutlined style={{ fontSize: "60px", color: "#3252DF" }} />
            </div>
          </>
        ) : (
          <>
            <div className="pb-5">
              <PageHeaders />
            </div>
            <Description />
            <TypeHotel type="livingroom" data={data.category[1]} />
            <Review data={data.testimonial} />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
