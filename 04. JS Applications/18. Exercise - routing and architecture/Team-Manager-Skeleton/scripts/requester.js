const baseUrl = "https://baas.kinvey.com/"
const appKey = "kid_Sy37gAkaB";
const appSecret = "01b47a57fc064fa2bc224c15985eced3";

function createAuthorization(type) {
    return type === 'Basic'
        ? `Basic ${btoa(`${appKey}:${appSecret}`)}`
        : `Kinvey: ${sessionStorage.getItem('authtoken')}`
};

function createHeaders(type, httpMethod, data) {
    const headers = {
        method: httpMethod,
        headers: {
            "Authorization": createAuthorization(type),
            "Content-Type": "application/json",
        }
    }

    if (httpMethod === "POST" || httpMethod === "PUT") {
        headers.body = JSON.stringify(data);
    }

    return headers;
}

function handleError(e) {
    if (!e.ok) {
        throw new Error(e.statusText);
    }

    return e;
}

function deserializeData(x) {
    return x.json();
}

function fetchData(kinveyModule, endpoint, headers) {
    const url = `${baseUrl}${kinveyModule}/${appKey}/${endpoint}`;

    return fetch(url, headers)
        .then(handleError)
        .then(deserializeData);
}

export function get(kinveyModule, endpoint, type) {
    const headers = createHeaders(type, "GET");

    return fetchData(kinveyModule, endpoint, headers);
}

export function post(kinveyModule, endpoint, data, type) {
    const headers = createHeaders(type, "POST", data);

    return fetchData(kinveyModule, endpoint, headers);
}

export function put(kinveyModule, endpoint, data, type) {
    const headers = createHeaders(type, "PUT", data);

    return fetchData(kinveyModule, endpoint, headers);
}

export function del(kinveyModule, endpoint, type) {
    const headers = createHeaders(type, "DELETE");

    return fetchData(kinveyModule, endpoint, headers);
}