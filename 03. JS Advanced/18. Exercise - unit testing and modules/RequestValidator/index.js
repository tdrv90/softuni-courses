function solve(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegex = /^([A-Za-z0-9.]+)$/gm;
    const msgRegex = /([^<>\&\\'"]+)/gm;

    const validMethod = obj.method && validMethods.includes(obj.method);
    const validUri = obj.uri && (obj.uri.match(uriRegex || '*'));
    const validVersion = obj.version && validVersions.includes(obj.version);
    const validMsg = obj.message && (obj.message === '' || obj.message.match(msgRegex));

    if (!validMethod) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!validUri) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersion) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!validMsg) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return obj;
}


let test0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}

console.log(solve(test0));