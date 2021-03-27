import '../court/Court.css'

const Court = ({
    name,
    address,
    image,
    price
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <button>Get Details</button>
                </section>
        </li>
    );
}

export default Court;