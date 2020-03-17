import Link from 'next/link';
import Router, { useRouter } from 'next/router';


const Item = (props) => {

    return (
        props.data.map(item => (
            <div className="card col-md-4" key={item.id}> 
                <img className="card-img-top" src={item.imgUrl} alt="Card Item Image" />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price}</p>
                </div>
            </div>
        ))
    )
};

export default Item;