const fetchData = async () => {
    const url = 'https://victorakaps.herokuapp.com/projects/profileMd/payload';
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };

    const data = await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            // console.log("printing result",result);
            return result;
        })
        .catch((error) => console.log('error', error));
    // console.log("printing data", data)
    return data.data
};

export { fetchData };
