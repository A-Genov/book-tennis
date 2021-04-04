import {Link} from 'react-router-dom';

const News = ({
    name,
    address,
    image,
    price,
    description,
    id
}) => {
    return (
        <li className="court">
            <img src={image} alt="pic" />
                <section className="info">
                    <div>
                        <h3>{name}</h3>
                        <p>{address}</p>
                    </div>
                    <div>
                        {price} BGN
                    </div>
                </section>
                <section className="more-info">
                    <p>{description}</p>
                    <Link className="btn-outline-white-details" to={`/courts/details/${id}`}>Get Details</Link>
                    <Link className="btn btn-fill-gradient" to={`/courts/book/${id}`}>Reserve Court</Link>
                </section>
        </li>
    );
}

export default News;