import "../styles/globals.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { ContexWrapper } from "../context";
function MyApp({ Component, pageProps }) {
  return (
    <ContexWrapper>
      <Component {...pageProps} />;
    </ContexWrapper>
  );
}

export default MyApp;
