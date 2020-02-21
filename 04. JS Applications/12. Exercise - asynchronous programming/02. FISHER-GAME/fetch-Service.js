const catches = function () {

    const baseUrl = "https://fisher-game.firebaseio.com/catches/";

    const get = (data) => {
        return fetch(baseUrl + ".json").then((r) => r.json());
    };

    const post = (data) => {

        const headers = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        return fetch(baseUrl + ".json", headers)
            .then((r) => r.json());
    };
    const put = (data) => {

    };
    const del = (id) => {
        return fetch(baseUrl + `${id}.json`, {
            method: "DELETE"
        });
    };



    return { get, post, put, del };
}();