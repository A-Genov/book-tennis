import '../createClub/CreateClub.css'

const CreateClub = () => {
    return (
        <section className="create-form-container">
            <h2>Create New Court</h2>
            <form>
                <p>
                    <label htmlFor="name">Court Name</label>
                    <input id="name" name="name" type="text" /> 
                </p>
                <p>
                    <label htmlFor="address">Address</label>
                    <input id="address" name="address" type="text" /> 
                </p>
                <p>
                    <label htmlFor="price">Price per hour</label>
                    <input id="price" name="price" type="number" /> 
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <textarea rows="5" cols="30" type="text" name="description" id="description"></textarea> 
                </p>
                <p>
                    <label htmlFor="image">Image</label>
                    <input id="image" name="image" type="text" /> 
                </p>
                <p>
                    <input type="submit" value="SUBMIT" id="submit" />
                </p>
            </form>
        </section>
    );
}

export default CreateClub;