import Layout from "../components/Layout";
import "../styles/globals.css";
import axios from "axios";

axios.defaults.baseURL = 'https://travel-blog-coral.vercel.app/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
export default MyApp;
