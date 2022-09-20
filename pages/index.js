import Head from "next/head";
import Image from "next/image";
import {
  Footer,
  Header,
  Jumbotron,
  MostPicked,
  Review,
  TypeHotel,
} from "../components";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className="xl:px-[100px]">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Header />
        <div className={styles.container}>
          <Jumbotron />
          <div className="pt-10">
            <MostPicked />
            <TypeHotel type="backyard" />
            <TypeHotel type="livingroom" />
            <TypeHotel type="kitchen" />
            <Review />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
