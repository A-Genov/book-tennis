import '../court/Court.css'

const Court = ({
    name,
    address,
    image,
    price,
    description
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
                    <button>Get Details</button>
                </section>
        </li>
    );
}

export default Court;