import Head from 'next/head';
import Layout from '../components/layout';
import storeData from '../dummyData/storeItems';
// import { getProducts } from '../lib/moltin';
import Item from '../components/about/[item]/item';
import Header from '../components/header';

const Home = (props) => (
  <div className="container">
    <Layout>
      <Header />
      <div className="row">
        <Item data={props.items} />
      </div>
    </Layout>
  </div>
)

Home.getInitialProps = async () => {
  try {
    return {
      items: storeData
    }
  } catch (e) {
    console.error(e)
  }
};

export default Home;
