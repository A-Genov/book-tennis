import '../about/About.css';

const Contacts = () => {
    return (
        <article className="about-container">
            <img src="/tennis-contacts.png" alt="Tennis racket hitting ball" />
            <section className="about-section">
                <h2>Contact us</h2>
                <p>Address: Sofia City, Center</p>
                <p>Phone: +359 123 456</p>
                <p>Email: contact@book-tennis.com</p>
            </section>
        </article>


    );
}

export default Contacts;