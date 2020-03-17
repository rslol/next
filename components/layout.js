import Head from 'next/head';
import Link from 'next/link';
import Navbar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>NextJS E-Commerce Site</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/lux/bootstrap.min.css" />
        </Head>
        <Navbar />
        {/* props.children has the pages */}
        {props.children}
    </div>
);

export default Layout;