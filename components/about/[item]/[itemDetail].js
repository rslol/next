import { useRouter } from 'next/router';
import Layout from '../../layout';
import Navbar from '../../navbar';

const ItemDetail = () => {
    const router = useRouter();
    const { item } = router.query;

    return (
        <Layout>
            <div className="card col-md-8"> 
                <img className="card-img-top" src={item.imgUrl} alt="Card Item Image" />
                <div className="card-body text-center">
                    <h3 className="card-title">{item.name}</h3>
                    <h5 className="card-text">${item.price}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
            </div>
        </Layout>
    )
}

export default ItemDetail;