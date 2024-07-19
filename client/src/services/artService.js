const baseUrl = 'http://localhost:3030/jsonstore/arts';

export const getAll = async () => {
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    const result = await response.json();
    return Object.values(result);
};


export const create = async (artData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(artData)
    });

    const result = await response.json();
    return result
}
