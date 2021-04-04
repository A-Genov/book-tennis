const formValidator = (data) => {
    let formIsValid = true;
    data.map(x => {
        if(x == false) {
            formIsValid = false;
        }
    })

    return formIsValid;
}

export default formValidator;