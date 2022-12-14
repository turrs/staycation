import React, { useContext, useEffect, useState } from "react";
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
import { AppContext } from "../../context";
export default function DetailId() {
  const { detailHotel } = useContext(AppContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [dataDetail, setDataDetail] = useState();
  const fetchData = async () => {
    try {
      const res = await Axios.get("landing-page");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const mergeFunction = async (detailHotel) => {
    setLoading(true);
    await fetchData();
    await fetchDataDetail(detailHotel);
    setLoading(false);
  };
  const router = useRouter();
  const { pid } = router.query;
  const fetchDataDetail = async (detailHotel) => {
    try {
      const res = await Axios.get(`detail-page/${detailHotel}`);
      setDataDetail(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (router.isReady) {
      mergeFunction(detailHotel);
    }
  }, [router.isReady]);

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
              <PageHeaders data={dataDetail} />
            </div>
            <Description data={dataDetail} />
            <TypeHotel type="livingroom" data={data?.category[1]} />
            <Review data={dataDetail?.testimonial} />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
